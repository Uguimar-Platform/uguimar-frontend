import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/organisms/header/header.component';
import { FooterComponent } from '../../shared/molecules/footer/footer.component';
import { ContactSectionComponent } from '../../shared/organisms/contact-section/contact-section.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ContactSectionComponent,
  ],
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export default class MainLayoutComponent {}
