import { Component } from '@angular/core';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ErrorMessageComponent, FormsModule], // Import FormsModule for ngModel
  template: `
    <div class="p-4">
      <app-error-message
        [label]="'Email'"
        [placeholder]="'Enter your email'"
        [errorMessage]="errorMessage"
        [(ngModel)]="emailValue">
      </app-error-message>
      <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded" (click)="onSubmit()">Submit</button>
    </div>
  `,
})
export class AppComponent {
  emailValue: string = '';
  errorMessage: string | null = null;

  onSubmit() {
    if (!this.emailValue.includes('@')) {
      this.errorMessage = 'Please enter a valid email address';
    } else {
      this.errorMessage = null;
    }
  }
}