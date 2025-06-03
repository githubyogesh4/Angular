import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Models/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: IEmployee[] = [{
    sno: '1001',
    name: 'Rahul',
    age: 25,
    designation: 'Manager',
    location: 'Mumbai'
  },
{
    sno: '1002',
    name: 'Vishal',
    age: 30,
    designation: 'HR',
    location: 'Pune'
  },
  {
    sno: '1003',
    name: 'Manish',
    age: 35,
    designation: 'Accountant',
    location: 'Banglore'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
