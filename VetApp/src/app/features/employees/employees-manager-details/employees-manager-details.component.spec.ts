import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesManagerDetailsComponent } from './employees-manager-details.component';

describe('EmployeesManagerDetailsComponent', () => {
  let component: EmployeesManagerDetailsComponent;
  let fixture: ComponentFixture<EmployeesManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesManagerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
