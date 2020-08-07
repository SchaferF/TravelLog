import { Component, OnInit } from '@angular/core';
import { SearchTripResponse } from '../models/search-trip-response';
import { TripService } from '../trips/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trips: SearchTripResponse[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
      .subscribe(trips => this.trips = trips.slice(1,5));
  }
}
