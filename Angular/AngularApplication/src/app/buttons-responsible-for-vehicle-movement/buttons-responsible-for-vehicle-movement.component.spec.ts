import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsResponsibleForVehicleMovementComponent } from './buttons-responsible-for-vehicle-movement.component';

describe('ButtonsResponsibleForVehicleMovementComponent', () => {
  let component: ButtonsResponsibleForVehicleMovementComponent;
  let fixture: ComponentFixture<ButtonsResponsibleForVehicleMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsResponsibleForVehicleMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsResponsibleForVehicleMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
