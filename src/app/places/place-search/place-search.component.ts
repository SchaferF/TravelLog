import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { SearchPlaceResponse } from '../../models/search-place-response';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {

  places$: Observable<SearchPlaceResponse[]>;
  private searchTerms = new Subject<string>();

  constructor(private placeService: PlaceService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.places$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.placeService.searchPlaces(term)),
    );
  }

}
