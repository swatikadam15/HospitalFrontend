import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegistartionComponent } from './patient-registartion.component';

describe('PatientRegistartionComponent', () => {
  let component: PatientRegistartionComponent;
  let fixture: ComponentFixture<PatientRegistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegistartionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
