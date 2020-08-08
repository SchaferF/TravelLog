import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';
import { SearchPlaceResponse } from '../../models/search-place-response';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() tripId: string;

  places: SearchPlaceResponse[];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces(): void{
    /*
    this.placeService.getPlaces()
      .subscribe(places => this.places = places);
    */
   this.placeService.getPlacesByTripId(this.tripId)
    .subscribe(places => this.places = places);
  }

  delete(place : SearchPlaceResponse): void{
    this.places = this.places.filter(p => p !== place);
    this.placeService.delete(place.id).subscribe();
  }
}
