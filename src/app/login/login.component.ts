import { Component } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormControl,FormGroup,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  respondMessage: any="";
  mAlert:boolean=false;


  constructor(private apiservice:ApiService, private router:Router) { }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  /* get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get password() {
    return this.profileForm.get('password') as FormControl;
  } */

  loginbutton() {
    console.log("This are the credentials ====== ",this.profileForm.value);
    this.apiservice.login(this.profileForm.value)
    .subscribe((data: any) => {
      console.log(data)
      this.router.navigate(["/dashboard-admin"]);
    },
    (error)=>{
      console.log(error.error)
      if(error.status==0){
        this.respondMessage = "Cross Origin: Header Absent";
      }else{
        this.respondMessage = error.error.error;
      }
      this.mAlert = true;
    });  

  } 

}
