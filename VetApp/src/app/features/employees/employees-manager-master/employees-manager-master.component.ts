import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees-manager-master',
  templateUrl: './employees-manager-master.component.html',
  styleUrls: ['./employees-manager-master.component.scss']
})
export class EmployeesManagerMasterComponent {
  @Input() employees: Employee[] = [];                  //critical: input - master get collection from parent and updates automatically as manager change collection
  @Output() select = new EventEmitter<Employee>();      //ciritcal: output - dummy master ask manager to keep selected employee
  @Output() add = new EventEmitter<void>();             //critical: emit  - dummy master ask manager to handle click on add employee
}


