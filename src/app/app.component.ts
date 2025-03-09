import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CreateDropdownComponent } from './atoms/create-dropdown/create-dropdown.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  plus=faPlus;

  status:number=2;

  open(){
    console.log("open");
  }
}
