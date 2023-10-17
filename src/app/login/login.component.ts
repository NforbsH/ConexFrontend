import {Component} from '@angular/core';
import {ApiService} from './../service/api.service';
import {Router} from '@angular/router';
import {Users} from "../model/user.model";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  respondMessage: any = "";
  mAlert: boolean = false;

  dangerAlert: boolean = false;
  dangerMessage: string = '';
  loginUser = new Users();
  rememberMe: any
  agreeToTerms: boolean = false;

  constructor(private apiservice: ApiService, private router: Router) {
  }


  /* get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get password() {
    return this.profileForm.get('password') as FormControl;
  } */

  loginbutton() {
    this.apiservice.login(this.loginUser.email, this.loginUser.password)
      .pipe(catchError(error => {
        this.dangerMessage = error.error.error
        this.dangerAlert = true;
        return throwError(error)
      }))
      .subscribe({
          next: (response) => {
            this.dangerAlert = false;
            this.router.navigate(['/dashboardcust'])
            this.apiservice.set('token', response.token);
            this.apiservice.set('user', this.loginUser);
          }
        }
      )
  }

  setTrue() {
    this.dangerAlert = false;
  }

}
