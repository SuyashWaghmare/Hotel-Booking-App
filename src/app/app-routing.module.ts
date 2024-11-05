// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { ViewAllHotelsComponent } from './view-all-hotels/view-all-hotels.component';

import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

import { BookingComponent } from './booking/booking.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotels', component: HotelSearchComponent },
  { path: 'view-all-hotels', component: ViewAllHotelsComponent }, // Updated path
  { path: 'booking', component: BookingComponent },
  { path: 'confirm-booking', component: ConfirmBookingComponent },
  { path: 'view-all-bookings', component: ViewAllBookingsComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'user-logout', component: LogoutComponent },
  // Add other routes as needed
  // You can also add a wildcard route for handling 404 errors:
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
