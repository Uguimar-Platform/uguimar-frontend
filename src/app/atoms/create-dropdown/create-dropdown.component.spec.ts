/**
 * This file contains unit tests for the CreateDropdownComponent
 * using Angular's testing framework.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDropdownComponent } from './create-dropdown.component';

/**
 * Test suite for the CreateDropdownComponent.
 */
describe('CreateDropdownComponent', () => {
  let component: CreateDropdownComponent; // Instance of the component being tested
  let fixture: ComponentFixture<CreateDropdownComponent>; // Representation of the component in the DOM

  /**
   * Setup before running tests.
   * Initializes the test environment and compiles the component.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDropdownComponent] // Import the component into the test environment
    })
    .compileComponents(); // Compile the declared components in the test module

    fixture = TestBed.createComponent(CreateDropdownComponent); // Create an instance of the component
    component = fixture.componentInstance; // Assign the instance to the component variable
    fixture.detectChanges(); // Trigger Angular's change detection
  });

  /**
   * Basic unit test: verifies that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component to exist (not be null or undefined)
  });
});
