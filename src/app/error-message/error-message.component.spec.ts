import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => { // Describes the test suite for the ErrorMessageComponent
  let component: ErrorMessageComponent; // Instance of the component
  let fixture: ComponentFixture<ErrorMessageComponent>; // Wrapper to handle DOM testing and data binding

  beforeEach(async () => {  // Initial setup before running the tests
    await TestBed.configureTestingModule({                
      imports: [ErrorMessageComponent]  // Configures the testing module and imports the component
    })                                                    
    .compileComponents(); // Compiles the component and its dependencies     

    fixture = TestBed.createComponent(ErrorMessageComponent); // Creates an instance of the component and its associated fixture
    component = fixture.componentInstance; // Gets the component instance
    fixture.detectChanges();  // Detects initial changes in the component
  });

  it('should create', () => {         // Tests if the component is created successfully
    expect(component).toBeTruthy();   // Expects the component to be truthy
  });
});
