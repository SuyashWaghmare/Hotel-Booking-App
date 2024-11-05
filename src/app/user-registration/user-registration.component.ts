
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  user: User = {
    id: 0,
    userName: '',
    emailId: '',
    mobileNumber: 0,
    password: ''
  };

  constructor(public us: UserService) {}

  saveUser(use: User) {
    if (use.id == 0) {
      console.log(use);
      this.us.saveUser(use).subscribe();
    } else {
      console.log(use);
      this.us.updateUser(use).subscribe();
    }
    window.location.reload();
  }

  resetData() {
    this.user = {
        id: 0,
        userName: '',
        emailId: '',
        mobileNumber: 0,
        password: ''
      
    };
  }
}
