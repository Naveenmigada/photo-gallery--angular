import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule,MatInputModule,MatIconModule,MatRadioModule,MatListModule,MatSelectModule,
    ReactiveFormsModule,FormsModule,RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  name='';
  password='';
  mail='';
  formvalid=false;
  // constructor(private router: Router) {}
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  validateForm() {
    this.formvalid = this.name === 'naveen' && this.password === '1234' && this.mail ==='naveenmigada@gmail.com';
  }
  emailFormControl = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);
  floatLabelControl = new FormControl('auto'); 
   
  
  

}
