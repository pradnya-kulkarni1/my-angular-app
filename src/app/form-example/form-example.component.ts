import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent implements OnInit{
  genders : String[] = ['Male','Female','Other'];
  employee: Employee = new Employee();
  today:string;

  constructor(){
    this.today = new Date().toISOString().split('T')[0];
  }

  ngOnInit():void {

    console.log("name =: ",this.employee.name);
    console.log("Email:= ",this.employee.email);

  }

}
