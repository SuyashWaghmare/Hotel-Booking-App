
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  availableHotels: Hotel[] = [];

  constructor(private hotelBookingService: HotelService) {} // Updated service name

  ngOnInit(): void {
    this.loadAvailableHotels();
  }

  loadAvailableHotels() {
    this.hotelBookingService.getAllHotels().subscribe(
      (hotels: Hotel[]) => {
        this.availableHotels = hotels;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  bookHotel(hotelId: number) {
    this.hotelBookingService.bookHotel(hotelId).subscribe(
      (response) => {
        alert(response.message); // Show a success message to the user
      },
      (error) => {
        alert(error.message); // Show an error message to the user
      }
    );
  }
}


