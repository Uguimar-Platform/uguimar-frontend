import { Component, effect, ElementRef, HostListener, input, signal, viewChild } from '@angular/core';

import { RouterLink } from '@angular/router';
import { RoutesNavDynamicSelect } from '../../interfaces/RoutesNavDynamicSelect';
import { CommonModule } from '@angular/common';

/**
 * Component that represents a dynamic selector with search and navigation functionality.
 *
 * Module for handling forms and two-way data binding.
 * Directive for handling route links in Angular.
 */
@Component({
      selector: 'dynamic-select',
      imports: [
            RouterLink,
            CommonModule
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

      // property focus is for the input and visibility on options of search
      protected focus = true;
      // selected input of html
      protected readonly input = viewChild.required<ElementRef>("InputSelect");
      public arrayRoutes = input.required<RoutesNavDynamicSelect[]>();
      public placeholder = input<string>("Buscar...");
      // width, height, opacity and border properties are of desing
      // property border is for border and ouline
      public width = input<string>("");
      public height = input<string>("");
      public opacity = input<string>("");
      public border = input<string>("");
      // Signal that stores the value entered by the user in the input field.
      protected routeInput = signal<string>("");

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
      constructor(private elRef: ElementRef) {

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

      /**
      * Detects clicks outside the input element and updates the focus state.
      * 
      * @param event - The click event from the document.
      * 
      * This method listens for clicks anywhere on the document. 
      * If the click occurs outside the input element, the `focus` state is set to `false`, 
      * indicating that the input is no longer active.
      */
      @HostListener('document:click', ['$event'])
      onClickOutside(event: Event) {
            if (!this.input().nativeElement.contains(event.target)) {
                  this.focus = false;
            }
      }
}