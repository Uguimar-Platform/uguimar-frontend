import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CardPlanComponent } from './shared/molecules/card-plan/card-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardPlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
