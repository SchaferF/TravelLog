import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { AuthService } from '../../security/auth.service';
import { User } from '../../models/user';
import { SearchTripResponse } from '../../models/search-trip-response';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  user: User;
  trips: SearchTripResponse[];

  constructor(private tripService: TripService, private authService: AuthService) {
    this.authService.getUser().subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips(this.user.id)
      .subscribe(trips => this.trips = trips);
  }

  delete(trip: SearchTripResponse): void {
    this.trips = this.trips.filter(x => x !== trip);
    this.tripService.deleteTrip(trip.id)
      .subscribe();
  }

}
