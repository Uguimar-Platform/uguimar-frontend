import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIconComponent } from './dynamic-icon.component';

describe('DynamicIconComponent', () => {
  let component: DynamicIconComponent;
  let fixture: ComponentFixture<DynamicIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
