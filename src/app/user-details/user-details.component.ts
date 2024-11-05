import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService) {}

  userDetails: User | null = null;

 

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails() {
    // Fetch the logged-in user details from the UserService
    this.userDetails = this.userService.getUserDetails();
  }

  updateUserProfile() {
    // Ensure userDetails is not null before updating
    if (this.userDetails) {
      // Update the user profile using the UserService.
      this.userService.updateUser(this.userDetails).subscribe(
        (response) => {
          // Handle successful profile update.
        },
        (error) => {
          // Handle error while updating the profile.
        }
      );
    } else {
      console.error("User details are null. Cannot update.");
    }
  }
  
}
