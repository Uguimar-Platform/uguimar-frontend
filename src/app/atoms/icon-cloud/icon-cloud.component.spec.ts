import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCloudComponent } from './icon-cloud.component';

describe('IconCloudComponent', () => {
  let component: IconCloudComponent;
  let fixture: ComponentFixture<IconCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
