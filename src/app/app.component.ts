import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { InputAtomComponent } from './atoms/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputAtomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';

  plus = faPlus;

  status: number = 2;

  open() {
    console.log('open');
  }
}
