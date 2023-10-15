import {Component} from '@angular/core';
import {IUsers, Users} from "../model/user.model";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  newUser = new Users();
  selectedUser = new Users();
  users?: IUsers[] = [
    {
      id: 1,
      email: "1@gmail.com",
      name: 'string',
      created_at: new Date(),
      updated_at: new Date(),
      password: 'qweq',
      role: [],
    },
    {id: 2}

  ]

  saveUser() {
    console.log(this.newUser);
  }

  saveEditedUser() {
    console.log('rest')
  }
}
