import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { SearchTripResponse } from '../models/search-trip-response';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getTrips(): Observable<SearchTripResponse[]> {
    return this.http.get<SearchTripResponse[]>(`${environment.apiUrl}/trips`).pipe(
      map((response) => {
        console.log(`Trips ${response}`);
        return response;
      })
    );
  }
}
