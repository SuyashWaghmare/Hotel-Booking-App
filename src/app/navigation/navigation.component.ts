import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.loginStatus.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
  }
}
