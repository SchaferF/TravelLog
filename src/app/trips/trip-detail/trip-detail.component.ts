import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { TripService } from '../trip.service';
import { SearchTripResponse } from '../../models/search-trip-response';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  trip: SearchTripResponse;

  constructor(private route: ActivatedRoute, private tripService: TripService, private location: Location) { }

  ngOnInit(): void {
    this.getTrip();
  }

  getTrip(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.tripService.getTrip(id)
      .subscribe(trip => this.trip = trip);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.tripService.updateTrip(this.trip.id, this.trip.title, this.trip.description)
      .subscribe(() => this.goBack());
  }
}
