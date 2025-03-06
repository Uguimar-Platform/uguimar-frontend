import { Component, input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
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
      protected routeInput = "";

      public arrayRoutes = input.required<RoutesNavDynamicSelect[]>();

      protected selectedRoute: RoutesNavDynamicSelect[] = [];

      protected eventInput() {
            if (!this.routeInput) {
                  this.selectedRoute = [];
                  return;
            }
            // Filter the array based on what the user types
            const filteredRoutes = this.arrayRoutes().filter(route =>
                  route.value.toLowerCase().includes(this.routeInput.toLowerCase())
            );

            // update the selectedRoute arrayRoutes
            this.selectedRoute = filteredRoutes;
      }

}