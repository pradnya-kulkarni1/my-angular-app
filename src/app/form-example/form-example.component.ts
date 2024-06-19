import { Component } from '@angular/core';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent{
  genders : String[] = ['Male','Female','Other'];
  email?: string;
  age: number = 0;
  acceptTerms: boolean= false;
  gender?: String;
  name?: String; 
  dateOfForm?: Date;

}
