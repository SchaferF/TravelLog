import { Component, OnInit } from '@angular/core';
import { SearchTripResponse } from '../models/search-trip-response';
import { TripService } from '../trips/trip.service';
import { User } from '../models/user';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user: User;
  trips: SearchTripResponse[] = [];

  constructor(private tripService: TripService, private authService: AuthService) {
    this.authService.getUser().subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips(this.user.id)
      .subscribe(trips => this.trips = trips.filter(x => x.placesCount >= 1).slice(1,5));
  }
}
