import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoursesComponent } from './card-courses.component';

describe('CardCoursesComponent', () => {
  let component: CardCoursesComponent;
  let fixture: ComponentFixture<CardCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
