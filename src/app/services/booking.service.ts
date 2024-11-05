import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Hotel } from '../models/hotel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private userService: UserService, private http: HttpClient) {}

  getAvailableHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`);
  }

  bookHotel(hotelId: number): Observable<any> {
    // Check if the user is logged in
    if (this.userService.isLoggedIn()) {
      // Perform the booking process and return an observable
      // You can implement the actual booking logic here
      // For demonstration purposes, let's return a simple observable
      return new Observable(observer => {
        // Simulate booking process
        setTimeout(() => {
          observer.next({ message: 'Booking successful' });
          observer.complete();
        }, 2000);
      });
    } else {
      // User is not logged in, return an error message
      return new Observable(observer => {
        setTimeout(() => {
          observer.error({ message: 'User must be logged in to book a hotel' });
          observer.complete();
        }, 2000);
      });
    }
  }
}