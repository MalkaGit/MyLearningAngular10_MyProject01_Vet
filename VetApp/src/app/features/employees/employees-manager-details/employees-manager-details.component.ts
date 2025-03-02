import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees-manager-details',
  templateUrl: './employees-manager-details.component.html',
  styleUrls: ['./employees-manager-details.component.scss']
})
export class EmployeesManagerDetailsComponent {
  @Input() employee!: Employee;                     //critical: details gets selected employee from maanger
  @Output() save = new EventEmitter<void>();        //critical: on save click, details emit  event to maanger
  @Output() cancel = new EventEmitter<void>();      //critical: on cancel click, details emit event  to manager
}
