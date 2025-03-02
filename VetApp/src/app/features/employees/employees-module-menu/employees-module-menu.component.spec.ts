import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesModuleMenuComponent } from './employees-module-menu.component';

describe('EmployeesModuleMenuComponent', () => {
  let component: EmployeesModuleMenuComponent;
  let fixture: ComponentFixture<EmployeesModuleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesModuleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesModuleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
