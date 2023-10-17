import {Component} from '@angular/core';
import {Users} from "../model/user.model";
import {ApiService} from "../service/api.service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  respondMessage: any = "";
  mAlert: boolean = false;

  dangerAlert: boolean = false;
  dangerMessage: string = '';
  user = new Users();
  rememberMe: any
  agreeToTerms: boolean = true;

  constructor(private apiService: ApiService, private router: Router) {
  }

  setTrue() {
    this.dangerAlert = true;

  }

  registerUser() {
    this.apiService.register(this.user.username, this.user.email, this.user.password, this.user.role)
      .pipe(catchError(error => {
        this.dangerAlert = true;
        this.dangerMessage = error.error.message;
        return throwError(error);
      }))
      .subscribe({
        next: (response) => {
          this.dangerAlert = true;
          this.router.navigate(['/login'])
        }
      })
  }
}
