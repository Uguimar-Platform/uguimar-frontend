import { Component } from '@angular/core';
import { faPlus, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './atoms/button/button.component';
import { LabelComponent } from './atoms/label/label.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, LabelComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  faUser = faUser;
  plus = faPlus;
  faTrash = faTrash;
  status: number = 2;

  open() {
    console.log('open');
  }
}
