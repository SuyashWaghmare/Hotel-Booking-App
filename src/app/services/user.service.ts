import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetails: User | null = null;
  public loginStatusSubject: Subject<boolean> = new Subject<boolean>();
  loginStatus: Observable<boolean> = this.loginStatusSubject.asObservable();
  private isLoggedInValue: boolean = false; // Rename the property to avoid duplicate identifier

  constructor(private http: HttpClient) { }

  saveUser(use: User): Observable<User> {
    // Implementation for saving the user data
    // ...
    return this.http.post<User>('http://localhost:9092/user-api/saveUser', use);
  }

  updateUser(use: User): Observable<User> {
    // Implementation for updating the user data
    // ...
    return this.http.put<User>('http://localhost:9092/user-api/updateUser/' + use.id, use);
  }

  loginUser(email: string, password: string): Observable<User> {
    const credentials = { emailId: email, password: password };
    return this.http.post<User>('http://localhost:9092/user-api/login', credentials);
  }

  logout() {
    this.userDetails = null;
    this.loginStatusSubject.next(false);
  }

  setUserDetails(userDetails: User) {
    this.userDetails = userDetails;
    this.loginStatusSubject.next(true);
  }

  getUserDetails(): User | null {
    return this.userDetails;
  }
  isLoggedIn(): boolean {
    // Implement the logic to check if the user is logged in (e.g., by checking the user session or token)
    // Return true if the user is logged in, false otherwise.
    return this.isLoggedInValue;
  }
}
