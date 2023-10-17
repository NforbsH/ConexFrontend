import {Component, OnInit} from '@angular/core';
import {Users} from "../model/user.model";
import {ApiService} from "../service/api.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users?: Users[] = [];

  newUser = new Users();
  selectedUser = new Users();
  viewUser = new Users();
  errorAlert: boolean = false;
  errorAlertMessage: string = '';
  successAlert: boolean = false;
  successAlertMessage: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  saveUser() {
    this.apiService.register(this.newUser.username, this.newUser.email, this.newUser.password, this.newUser.role)
      .pipe(catchError(error => {
        this.errorAlert = true;
        this.successAlert = false;
        this.errorAlertMessage = error.error.message;
        return throwError(error)
      }))
      .subscribe({
        next: (res) => {
          this.successAlert = true;
          this.errorAlert = false;
          this.successAlertMessage = 'New user added successfully';
          this.getAllUsers();
        }
      })
  }

  saveEditedUser() {

  }

  getAllUsers() {
    this.apiService.getAllUsers()
      .pipe(catchError(error => {
        return throwError(error)
      }))
      .subscribe({
        next: (res) => {
          this.users = res;
          console.log(res)
        }
      })
  }

  viewUserF(user: Users) {
    this.viewUser = user;
  }

  EditedUser(user: Users) {

  }

  delete(user: Users) {

  }
}
