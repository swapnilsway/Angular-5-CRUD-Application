import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Employee } from './employee.model';
// import * as firebase from 'Firebase';

@Injectable ({
  providedIn: 'root'
})

export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee (employee: Employee) {
    this.employeeList.push ({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }
    // const newData = firebase.database().ref('Register/').push();
    // // let newData = this.ref.push();
    // newData.set({
    //   name: employee.name,
    //   position: employee.position,
    //   office: employee.office,
    //   salary: employee.salary
    // });


  updateEmployee (employee: Employee) {
    this.employeeList.update (employee.$key, {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }

  // getData1() {
  //   this.firebase.ref('Register/').on('value', resp => {
  //     console.log(resp);
  //   });
  // }

}
// export const snapshotToArray = snapshot => {
//   const returnArr = [];

//   snapshot.forEach(childSnapshot => {
//     const item = childSnapshot.val();
//     item.key = childSnapshot.key;
//     returnArr.push(item);
//   });

//   return returnArr;
// };
