import {Component} from '@angular/core';
import {Users} from "../model/user.model";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  newUser = new Users();
  selectedUser = new Users();
  users?: Users[] = []

  saveUser() {
    console.log(this.newUser);
  }

  saveEditedUser() {
    console.log('rest')
  }
}
