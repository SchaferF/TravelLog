import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';

import { SearchTripResponse } from '../../models/search-trip-response';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips: SearchTripResponse[];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
      .subscribe(trips => this.trips = trips);
  }
}
