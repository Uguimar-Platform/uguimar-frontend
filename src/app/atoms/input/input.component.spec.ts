import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAtomComponent } from './input.component';

describe('InputAtomComponent', () => {
  let component: InputAtomComponent;
  let fixture: ComponentFixture<InputAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value when writeValue is called', () => {
    component.writeValue('test value');
    expect(component.value).toEqual('test value');
  });

  it('should call onChange and onTouched when onInputChange is triggered', () => {
    const onChangeSpy = spyOn(component, 'onChange');
    const onTouchedSpy = spyOn(component, 'onTouched');
    const mockEvent = { target: { value: 'typed value' } } as unknown as Event;

    component.onInputChange(mockEvent);
    expect(onChangeSpy).toHaveBeenCalledWith('typed value');
    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should leave the component value empty if writeValue is called with null', () => {
    component.writeValue(null as any);
    expect(component.value).toBe('');
  });
});
