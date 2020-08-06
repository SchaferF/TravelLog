import { Component, OnInit, Input } from '@angular/core';
import { SearchPlaceResponse } from '../../models/search-place-response';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  @Input() place: SearchPlaceResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
