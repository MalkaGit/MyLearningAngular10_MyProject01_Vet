import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees-manager',
  templateUrl: './employees-manager.component.html',
  styleUrls: ['./employees-manager.component.scss']
})
export class EmployeesManagerComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', role: 'vet', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', role: 'assistant', address: '456 Elm St' }
  ];
  selectedEmployee: Employee | null = null;

  selectEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee };
  }

  addEmployee() {
    this.selectedEmployee = { id: 0, name: '', role: 'assistant', address: '' };
  }

  saveEmployee() {
    if (this.selectedEmployee) {
      if (this.selectedEmployee.id === 0) {
        this.selectedEmployee.id = this.employees.length + 1;
        this.employees.push(this.selectedEmployee);
      } else {
        this.employees = this.employees.map(emp =>
          emp.id === this.selectedEmployee!.id ? this.selectedEmployee! : emp
        );
      }
    }
    this.selectedEmployee = null;
  }

  cancelEdit() {
    this.selectedEmployee = null;
  }
}


/*

export class EmployeesManagerComponent {
 


  saveEmployee() {
    if (this.selectedEmployee) {
      if (this.selectedEmployee.id === 0) {
        this.selectedEmployee.id = this.employees.length + 1;
        this.employees.push(this.selectedEmployee);
      } else {
        this.employees = this.employees.map(emp =>
          emp.id === this.selectedEmployee!.id ? this.selectedEmployee! : emp
        );
      }
    }
    this.selectedEmployee = null;
  }

 
  }
}

*/