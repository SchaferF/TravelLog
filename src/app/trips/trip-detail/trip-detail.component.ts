import { Component, OnInit, Input } from '@angular/core';
import { SearchTripResponse } from '../../models/search-trip-response';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
s
  @Input() trip: SearchTripResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
