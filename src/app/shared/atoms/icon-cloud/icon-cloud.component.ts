import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  input,
} from '@angular/core';
import { Icon, TargetRotation } from './interface.icon-cloud';
import { DEFAULT_TECH_SLUGS } from './icon-cloud.constants';

/**
 * Component that represents a 3D icon cloud.
 * It allows rotating the icons by dragging with the mouse
 * or clicking on a specific icon to bring it to the front.
 */
@Component({
  selector: 'app-icon-cloud',
  standalone: true,
  templateUrl: './icon-cloud.component.html',
})
export class IconCloudComponent implements OnInit, OnDestroy {
  /**
   * List of image URLs to be drawn as icons on the canvas.
   * If not provided, the default 'slugs' list will be used.
   */
  imageUrls = input<string[]>([]);

  /**
   * Computed signal that either uses provided images or defaults to slugs
   */
  images = computed(() => {
    const providedImages = this.imageUrls();
    if (providedImages.length > 0) {
      return providedImages;
    }
    return this.slugs.map(
      slug => `https://cdn.simpleicons.org/${slug}/${slug}`
    );
  });

  /**
   * Reference to the <canvas> element where the icon cloud is rendered.
   */
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Array that stores the positions and properties of each icon. */
  private iconPositions: Icon[] = [];

  /** Current rotation in the X and Y axes. */
  private rotation = { x: 0, y: 0 };

  /** Flag indicating whether the user is dragging the mouse. */
  private isDragging = false;

  /** Last recorded mouse position in pixels. */
  private lastMousePos = { x: 0, y: 0 };

  /** Current mouse position in pixels, relative to the canvas. */
  private mousePos = { x: 0, y: 0 };

  /**
   * Object describing the target rotation when an icon is clicked,
   * along with the start time and the animation duration.
   */
  private targetRotation: TargetRotation | null = null;

  /** Animation frame identifier. */
  private animationFrameId?: number;

  /**
   * Mutable reference to the rotation object; used to maintain
   * the rotation state while dragging or performing the click animation.
   */
  private rotationRef = this.rotation;

  /** Array of offscreen canvases for each icon, where the clipped image is drawn. */
  private iconCanvases: HTMLCanvasElement[] = [];

  /** Indicates whether each icon image has been successfully loaded. */
  private imagesLoaded: boolean[] = [];

  /**
   * List of slugs used to automatically generate
   * icon URLs if no external list is provided.
   */
  private slugs = DEFAULT_TECH_SLUGS;

  /**
   * Lifecycle hook that runs when the component is initialized.
   * The offscreen canvases for each icon are initialized,
   * the icon positions are computed, and the animation begins.
   */
  ngOnInit() {
    this.initializeIconCanvases();
    this.generateIconPositions();
    this.startAnimation();
  }

  /**
   * Easing function for smoothing out the rotation animation.
   * @param t A number between 0 and 1 representing the animation progress.
   * @returns The eased value.
   */
  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  /**
   * Creates an offscreen canvas for each image, clipping it into a circle.
   * Also marks 'imagesLoaded' when the image has been successfully loaded.
   */
  private initializeIconCanvases() {
    const imageUrls = this.images();
    if (!imageUrls.length) return;

    // Initialize a boolean array indicating if each image has loaded
    this.imagesLoaded = new Array(imageUrls.length).fill(false);

    // For each image, create an in-memory canvas and clip it into a circle
    this.iconCanvases = imageUrls.map((url, index) => {
      const offscreen = document.createElement('canvas');
      offscreen.width = 40;
      offscreen.height = 40;
      const ctx = offscreen.getContext('2d');

      if (ctx) {
        const img = new Image();
        // Allows loading images from different origins without blocking
        img.crossOrigin = 'anonymous';
        img.src = url;
        // When the image is loaded, draw it as a circle
        img.onload = () => {
          ctx.clearRect(0, 0, 40, 40);
          ctx.beginPath();
          ctx.arc(20, 20, 20, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, 0, 0, 40, 40);
          this.imagesLoaded[index] = true;
        };
        // If there's an error loading the image, log a warning
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`);
          this.imagesLoaded[index] = false;
        };
      }
      return offscreen;
    });
  }

  /**
   * Generates the 3D position of each icon in a "cloud" shape.
   * It uses a distribution of points over a sphere.
   */
  private generateIconPositions() {
    const imageUrls = this.images();
    const numIcons = imageUrls.length || 20;
    const offset = 2 / numIcons;
    // Use the phi factor to distribute points uniformly on the sphere
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      // Calculate the position on the sphere
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      this.iconPositions.push({
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
  }

  /**
   * Mouse event triggered on canvas mousedown.
   * Determines if an icon was clicked and adjusts the target rotation,
   * or enables dragging mode if no icon was clicked.
   * @param event Mouse event containing the click position.
   */
  handleMouseDown(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ctx = this.canvasRef.nativeElement.getContext('2d');
    if (!ctx) return;

    // Check if the click was on any icon
    for (const icon of this.iconPositions) {
      // Compute the 3D rotated position of the icon
      const cosX = Math.cos(this.rotationRef.x);
      const sinX = Math.sin(this.rotationRef.x);
      const cosY = Math.cos(this.rotationRef.y);
      const sinY = Math.sin(this.rotationRef.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      // Translate the 3D position to screen coordinates
      const screenX = this.canvasRef.nativeElement.width / 2 + rotatedX;
      const screenY = this.canvasRef.nativeElement.height / 2 + rotatedY;

      // Calculate the collision radius
      const scale = (rotatedZ + 200) / 300;
      const radius = 20 * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      // If the click is within the circular area of the icon
      if (dx * dx + dy * dy < radius * radius) {
        // Calculate the target rotation to bring that icon to the front
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z)
        );
        const targetY = Math.atan2(icon.x, icon.z);
        const currentX = this.rotationRef.x;
        const currentY = this.rotationRef.y;
        // Angular distance between the current rotation and the desired one
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2)
        );
        // Minimum and maximum duration for the rotation animation
        const duration = Math.min(2000, Math.max(800, distance * 1000));

        this.targetRotation = {
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        };
        return;
      }
    }

    // If no icon was clicked, enable dragging mode
    this.isDragging = true;
    this.lastMousePos = { x: event.clientX, y: event.clientY };
  }

  /**
   * Mouse event triggered on canvas mousemove.
   * If dragging is active, updates the cloud's rotation based on the mouse displacement.
   * @param event Mouse event containing the current position.
   */
  handleMouseMove(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mousePos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    // If dragging, adjust the rotation based on the mouse delta
    if (this.isDragging) {
      const deltaX = event.clientX - this.lastMousePos.x;
      const deltaY = event.clientY - this.lastMousePos.y;

      this.rotationRef = {
        x: this.rotationRef.x + deltaY * 0.002,
        y: this.rotationRef.y + deltaX * 0.002,
      };
      this.lastMousePos = { x: event.clientX, y: event.clientY };
    }
  }

  /**
   * Mouse event triggered on canvas mouseup or mouseleave.
   * Disables dragging mode.
   */
  handleMouseUp() {
    this.isDragging = false;
  }

  /**
   * Starts the main animation loop of the canvas, where each frame
   * the screen is cleared, each icon's position is computed, and then drawn.
   */
  private startAnimation() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Recursive function called on each animation frame
    const animate = () => {
      // Clear the canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      // Calculate the distance of the mouse from the center to vary the speed
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = this.mousePos.x - centerX;
      const dy = this.mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Define a base speed and increase it if the mouse is farther away
      const speed = 0.003 + (distance / maxDistance) * 0.01;

      // If there's a target rotation (icon click), animate towards it
      if (this.targetRotation) {
        const elapsed = performance.now() - this.targetRotation.startTime;
        const progress = Math.min(1, elapsed / this.targetRotation.duration);
        const easedProgress = this.easeOutCubic(progress);

        // Interpolate rotation values based on progress
        this.rotationRef = {
          x:
            this.targetRotation.startX +
            (this.targetRotation.x - this.targetRotation.startX) *
              easedProgress,
          y:
            this.targetRotation.startY +
            (this.targetRotation.y - this.targetRotation.startY) *
              easedProgress,
        };

        // Once the animation completes, clear the target rotation
        if (progress >= 1) {
          this.targetRotation = null;
        }
      } else if (!this.isDragging) {
        // Automatic rotation when not dragging and no click animation is in progress
        this.rotationRef = {
          x: this.rotationRef.x + (dy / canvas.height) * speed,
          y: this.rotationRef.y + (dx / canvas.width) * speed,
        };
      }

      // Draw each icon at its rotated position
      this.iconPositions.forEach((icon, index) => {
        // If the image hasn't loaded, skip drawing this icon
        if (!this.imagesLoaded[index]) {
          return;
        }

        // Calculate 3D rotation
        const cosX = Math.cos(this.rotationRef.x);
        const sinX = Math.sin(this.rotationRef.x);
        const cosY = Math.cos(this.rotationRef.y);
        const sinY = Math.sin(this.rotationRef.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        // Adjust scale and opacity to simulate depth
        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        // Save the context state
        ctx.save();
        // Move the context to the final icon position
        ctx.translate(centerX + rotatedX, centerY + rotatedY);
        // Scale according to the distance
        ctx.scale(scale, scale);
        // Set opacity
        ctx.globalAlpha = opacity;

        // Draw the icon's offscreen canvas if available
        const imageUrls = this.images();
        if (imageUrls.length && this.iconCanvases[index]) {
          ctx.drawImage(this.iconCanvases[index], -20, -20, 40, 40);
        }

        // If the image hasn't loaded yet,
        // draw a circle with the icon's number
        if (
          imageUrls.length &&
          this.iconCanvases[index] &&
          this.imagesLoaded[index]
        ) {
          ctx.drawImage(this.iconCanvases[index], -20, -20, 40, 40);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, 20, 0, Math.PI * 2);
          ctx.fillStyle = '#4444ff';
          ctx.fill();
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '16px Arial';
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        // Restore the context
        ctx.restore();
      });

      // Request the next animation frame
      this.animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();
  }

  /**
   * Lifecycle hook that runs when the component is destroyed.
   * Cancels the animation to avoid memory leaks.
   */
  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
