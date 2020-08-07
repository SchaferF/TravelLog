import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { PlaceService } from '../place.service';
import { SearchPlaceResponse } from '../../models/search-place-response';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place: SearchPlaceResponse;

  constructor(private route: ActivatedRoute, private placeService: PlaceService, private location: Location) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(place => this.place = place);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.placeService.updatePlace(this.place.id, this.place.name, this.place.description, this.place.location,
      this.place.tripHref, this.place.tripId, this.place.pictureUrl).subscribe(() => this.goBack());
  }
}
