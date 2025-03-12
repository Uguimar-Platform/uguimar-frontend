import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterAuthComponent } from './footer-auth.component';

/**
 * @suite FooterAuthComponent
 * @description Test suite for the FooterAuthComponent.
 * These tests verify the creation and basic behavior of the component.
 */
describe('FooterAuthComponent', () => {
  let component: FooterAuthComponent;
  let fixture: ComponentFixture<FooterAuthComponent>;

  /**
   * @function beforeEach
   * @description Sets up the test environment before each test case.
   * - Initializes the test module with TestBed.
   * - Creates an instance of the component and its fixture.
   * - Detects changes to ensure the template is rendered correctly.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /**
       * @property imports
       * @description List of components or modules to import for testing.
       * In this case, FooterAuthComponent is directly imported.
       */
      imports: [FooterAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @test should create
   * @description Verifies that the component is created correctly.
   * @expect component toBeTruthy: Ensures that the component instance is not null or undefined.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
