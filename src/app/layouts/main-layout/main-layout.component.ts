import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/organisms/header/header.component';
import { FooterComponent } from '../../shared/molecules/footer/footer.component';
import { HeroSectionComponent } from '../../shared/organisms/hero-section/hero-section.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
  ],
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export default class MainLayoutComponent {}
