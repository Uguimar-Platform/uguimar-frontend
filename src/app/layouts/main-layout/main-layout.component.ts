import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/organisms/header/header.component';
import { FooterComponent } from '../../shared/molecules/footer/footer.component';
import { HeroSectionComponent } from '../../shared/organisms/hero-section/hero-section.component';

@Component({
  selector: 'app-main-layout',
<<<<<<< HEAD
  imports: [RouterModule, HeaderComponent, FooterComponent, HeroSectionComponent],
=======
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
  ],
>>>>>>> cae72480809fc52945894d23fdddd93808d97c02
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export default class MainLayoutComponent {}
