import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatIconModule,RouterLink,MatFormFieldModule,MatInputModule,RouterModule,FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  password:string='';
  password2:string='';
  formvalid=false;
  hide = true;

  validateForm(){
     this.formvalid=this.password===this.password2;
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  emailFormControl = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);

}
