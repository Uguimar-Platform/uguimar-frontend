import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../../molecules/navigation-menu/navigation-menu.component';
import { CreateDropdownComponent } from '../../atoms/create-dropdown/create-dropdown.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'header-organism',
  imports: [NavigationMenuComponent, CreateDropdownComponent, ButtonComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
