import { Component, effect, input, InputSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RoutesNavDynamicSelect } from '../../interfaces/RoutesNavDynamicSelect';
@Component({
      selector: 'dynamic-select',
      imports: [
            FormsModule,
            RouterLink
      ],
      templateUrl: './dynamic-select.component.html',
      styleUrl: './dynamic-select.component.scss'
})
export class DynamicSelectComponent {
      protected routeInput = signal<string>("");

      public arrayRoutes = input.required<RoutesNavDynamicSelect[]>();

      protected selectedRoute: RoutesNavDynamicSelect[] = [];

      constructor() {
            effect(() => {
                const valueInput = this.routeInput();
                this.eventInput(valueInput);
            });
        }
        
      protected eventInput(valueFilter:string) {
            if (!valueFilter) {
                  this.selectedRoute = [];
                  return;
            }
            // Filter the array based on what the user types
            const filteredRoutes = this.arrayRoutes().filter(route =>
                  route.value.toLowerCase().includes(valueFilter.toLowerCase())
            );

            // update the selectedRoute arrayRoutes
            this.selectedRoute = filteredRoutes;
      }

}