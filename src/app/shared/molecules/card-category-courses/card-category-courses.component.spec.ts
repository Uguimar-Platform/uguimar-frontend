import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoryCoursesComponent } from './card-category-courses.component';

describe('CardCategoryCoursesComponent', () => {
  let component: CardCategoryCoursesComponent;
  let fixture: ComponentFixture<CardCategoryCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCategoryCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCategoryCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
