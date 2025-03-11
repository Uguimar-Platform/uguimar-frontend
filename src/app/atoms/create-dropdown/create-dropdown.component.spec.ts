//Import necessary modules for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDropdownComponent } from './create-dropdown.component';
/**
 *@testSuize CreateDropdownComponent
 *@description
 *Holds an instance of the CreateDropdownComponent to be tested.
 */

describe('CreateDropdownComponent', () => {
  let component: CreateDropdownComponent;
  /**
   * @property component
   * Holds an instance of the CreateDropdownComponent to be tested.
   */

  let fixture: ComponentFixture<CreateDropdownComponent>;
  /**
   * @property fixture
   * Represents the testing environment for the component.
   */

  beforeEach(async () => {
    /**
     * @lifecycleHook beforeEach
     * @description
     * Initializes the testing module and sets up the component instance before each test.
     */
    await TestBed.configureTestingModule({
      imports: [CreateDropdownComponent],
      /**
       * @imports [CreateDropdownComponent]
       * Declares the component within the testing module.
       */
    }).compileComponents(); //Compiles the component and its dependencies.

    //Create an instance of the component for testing.
    fixture = TestBed.createComponent(CreateDropdownComponent);
    component = fixture.componentInstance;

    //Trigger change detection to reflect component initialization.
    fixture.detectChanges();
  });

  it('should create', () => {
    /**
     *@test should create the component
     *@description
     *Ensures that the CreateDropdownComponent is successfully instantianed.
     */
    expect(component).toBeTruthy();
  });
});
