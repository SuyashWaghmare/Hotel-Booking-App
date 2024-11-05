import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    // Call the logout() method of the UserService to clear the user session or token
    this.userService.logout();
    
    // Redirect the user to the login page after logging out
    this.router.navigate(['/user-login']);
  }

}
