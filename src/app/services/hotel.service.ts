import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:9092/hotel-api'; // Modify the URL accordingly

  constructor(private http: HttpClient, private userService: UserService) {} // Inject the UserService

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/getAllHotels`);
  }

  // Other hotel-related methods...
  
  // Example method using UserService to check if the user is logged in
  bookHotel(hotelId: number): Observable<any> {
    if (this.userService.isLoggedIn()) {
      // Proceed with booking logic...
      // For now, let's just return a dummy observable
      return new Observable((observer) => {
        observer.next({ message: 'Hotel booked successfully!' });
        observer.complete();
      });
    } else {
      // User is not logged in, handle accordingly
      return new Observable((observer) => {
        observer.error({ message: 'You need to be logged in to book a hotel.' });
        observer.complete();
      });
    }
  }
  
}
