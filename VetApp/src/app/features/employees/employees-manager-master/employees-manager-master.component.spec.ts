import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesManagerMasterComponent } from './employees-manager-master.component';

describe('EmployeesManagerMasterComponent', () => {
  let component: EmployeesManagerMasterComponent;
  let fixture: ComponentFixture<EmployeesManagerMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesManagerMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesManagerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
