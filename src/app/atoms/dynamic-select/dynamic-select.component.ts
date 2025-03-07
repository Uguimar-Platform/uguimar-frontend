import { Component, effect, input, InputSignal, OnChanges, signal, SimpleChanges } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RoutesNavDynamicSelect } from '../../interfaces/RoutesNavDynamicSelect';

/* Component that represents a dynamic selector with search and navigation functionality.*/
@Component({
      selector: 'dynamic-select',
      imports: [
            FormsModule,      // Module for handling forms and two-way data binding.
            RouterLink        // Directive for handling route links in Angular.
      ],
      templateUrl: './dynamic-select.component.html',
      styleUrl: './dynamic-select.component.scss'
})

export class DynamicSelectComponent {

      // signal for component width
      public width = input<string>("w-[130px]");
  
      // Signal that stores the value entered by the user in the input field.
      protected routeInput = signal<string>("");

      // Input property that receives an array of routes for the dynamic selector.
      public arrayRoutes = input.required<RoutesNavDynamicSelect[]>();

      // Array that stores the routes filtered based on user input.
      protected selectedRoute: RoutesNavDynamicSelect[] = [];


      /* Component constructor.
         Used to initialize the effect that reacts to changes in `routeInput`.
      */
      constructor() {
            
            // Effect that is executed whenever `routeInput` changes.
            effect(() => {
                const valueInput = this.routeInput(); // Gets the current value of `routeInput`.
                this.eventInput(valueInput);          // Calls `eventInput` with the current value.
            });
      }
      
      /* Method that filters routes based on user input. */  
      protected eventInput(valueFilter:string) {

            // If there is no filter value, the array of selected routes is emptied.
            if (!valueFilter) {
                  this.selectedRoute = [];
                  return;
            }

            // Filters routes based on the value entered by the user.
            const filteredRoutes = this.arrayRoutes().filter(route =>
                  route.value.toLowerCase().includes(valueFilter.toLowerCase())
            );

            // Updates the array of selected routes with the filtered routes.
            this.selectedRoute = filteredRoutes;
      }

}
