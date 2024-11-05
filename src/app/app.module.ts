import { Booking } from './models/booking.model';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AboutComponent } from './about/about.component';
import { ViewAllHotelsComponent } from './view-all-hotels/view-all-hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BookingComponent } from './booking/booking.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    HotelSearchComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ConfirmBookingComponent,
    ViewAllBookingsComponent,
    AboutComponent,
    ViewAllHotelsComponent,
    UserDetailsComponent,
   BookingComponent,
    LogoutComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
