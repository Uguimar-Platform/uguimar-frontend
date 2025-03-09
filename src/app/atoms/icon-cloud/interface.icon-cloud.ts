/**
 * Represents an icon in the 3D cloud with its position, appearance properties, and identifier.
 * Used to track and render each technology icon in the cloud visualization.
 */
export interface Icon {
  /** X-coordinate in 3D space */
  x: number;
  /** Y-coordinate in 3D space */
  y: number;
  /** Z-coordinate in 3D space */
  z: number;
  /** Scaling factor for the icon's size */
  scale: number;
  /** Opacity value between 0-1 */
  opacity: number;
  /** Unique identifier for the icon */
  id: number;
}

/**
 * Describes rotation animation parameters when focusing on a particular icon.
 * Used when calculating smooth transitions between different view angles.
 */
export interface TargetRotation {
  /** Target X-axis rotation angle */
  x: number;
  /** Target Y-axis rotation angle */
  y: number;
  /** Starting X-axis rotation angle */
  startX: number;
  /** Starting Y-axis rotation angle */
  startY: number;
  /** Angular distance between start and target rotations */
  distance: number;
  /** Animation start timestamp */
  startTime: number;
  /** Total animation duration */
  duration: number;
}