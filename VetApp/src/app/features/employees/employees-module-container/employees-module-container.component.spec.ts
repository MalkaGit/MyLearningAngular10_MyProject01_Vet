import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesModuleContainerComponent } from './employees-module-container.component';

describe('EmployeesModuleContainerComponent', () => {
  let component: EmployeesModuleContainerComponent;
  let fixture: ComponentFixture<EmployeesModuleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesModuleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesModuleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
