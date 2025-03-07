import { Component, effect, input, InputSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RoutesNavDynamicSelect } from '../../interfaces/RoutesNavDynamicSelect';


/** 
 * Component that represents a dynamic selector with search and navigation functionality.
 * 
 * Module for handling forms and two-way data binding.
 * Directive for handling route links in Angular.
*/
@Component({
      selector: 'dynamic-select',
      imports: [
            FormsModule,
            RouterLink
      ],
      templateUrl: './dynamic-select.component.html',
      styleUrl: './dynamic-select.component.scss'
})

/** 
 * Signal that stores the value entered by the user in the input field.
 * 
 * Input property that receives an array of routes for the dynamic selector.
 * @input array Routes - Array of avDynamicSelect Routes objects representing the available routes.
 * 
 * Array that stores the routes filtered based on user input.
*/
export class DynamicSelectComponent {

      // Signal that stores the value entered by the user in the input field.
      protected routeInput = signal<string>("");
      // width and height properties are of size
      public width = input<string>("");
      public height = input<string>("");
      public placeholder = input<string>("Buscar...");
      public arrayRoutes = input.required<RoutesNavDynamicSelect[]>();

      protected selectedRoute: RoutesNavDynamicSelect[] = [];


      /** 
      * Component constructor.
      * Used to initialize the effect that reacts to changes in `routeInput`.
      * 
      * 
      * Effect that is executed whenever `routeInput` changes.
      * Gets the current value of `routeInput`.
      * Calls `eventInput` with the current value.
      */
      constructor() {

            effect(() => {
                  const valueInput = this.routeInput();
                  this.eventInput(valueInput);
            });
      }


      /**
      * Method that filters routes based on user input. 
      * @param valueFilter - Value entered by the user to filter the routes.
      * 
      * If there is no filter value, the array of selected routes is emptied.
      * Filters routes based on the value entered by the user.
      * Updates the array of selected routes with the filtered routes.
      */
      protected eventInput(valueFilter: string) {

            if (!valueFilter) {
                  this.selectedRoute = [];
                  return;
            }

            const filteredRoutes = this.arrayRoutes().filter(route =>
                  route.value.toLowerCase().includes(valueFilter.toLowerCase())
            );

            this.selectedRoute = filteredRoutes;
      }

}
