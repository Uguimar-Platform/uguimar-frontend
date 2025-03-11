import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-footer-auth',
  imports: [CommonModule, LinkComponent],
  templateUrl: './footer-auth.component.html',
  styleUrl: './footer-auth.component.scss',
})
export class FooterAuthComponent {}
