import {element} from 'protractor/built';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

  // providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
  employeeList: Employee [];
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      // tslint:disable-next-line:no-shadowed-variable
      item.forEach( element => {
        const y = element.payload.toJSON ();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    const confirm = 'Are you sure you want to delete the record..??';
    if (confirm) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning('Deleted Successfully !!', 'Employee Registered !');
    }
  }

}
