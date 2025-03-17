import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LearningPathSectionComponent } from './shared/organisms/learning-patch-section/learning-path-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LearningPathSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
