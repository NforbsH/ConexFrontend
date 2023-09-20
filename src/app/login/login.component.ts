import { Component } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormControl,FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiservice:ApiService) { }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get password() {
    return this.profileForm.get('password') as FormControl;
  }

  loginbutton() {
    console.log(this.profileForm.value.email, this.profileForm.value.password)
    this.apiservice.login(this.profileForm.value.email, this.profileForm.value.password).subscribe((data: any) => {
      console.log(data)
  });  

  } 

}
