import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = {
    id: 0,
    userName: '',
    emailId: '',
    mobileNumber: 0,
    password: ''
  };

  loginError: string = '';

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.userService.loginUser(this.user.emailId, this.user.password).subscribe(
      (response) => {
        this.userService.setUserDetails(response);
        this.router.navigate(['/user-details']);
      },
      (error) => {
        console.error(error);
        this.loginError = 'Invalid email or password';
      }
    );
  }
}
