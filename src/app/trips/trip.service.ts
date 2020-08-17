import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";

import { SearchTripResponse } from '../models/search-trip-response';
import { AddTripRequest } from '../models/add-trip-request';
import { AddTripResponse } from '../models/add-trip-response';
import { MessageService } from '../shared/services/message.service';
import { environment } from "../../environments/environment";
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /**
   * GET all trips
   */
  getTrips(userId?: string): Observable<SearchTripResponse[]> {
    return this.http.get<SearchTripResponse[]>(`${environment.apiUrl}/trips`).pipe(
      tap(_ => this.log('fetched trips')),
      map((response) => {
        if(userId) {
          response = response.filter(x => x.userId == userId);
        }
        console.log(`Trips ${response}`);
        return response;
      })
    );
  }

  /**
   * Add a trip 
   * @param addTrip
   */
  addTrip(trip: AddTripRequest): Observable<AddTripResponse>{
    return this.http.post<AddTripResponse>(`${environment.apiUrl}/trips`, trip).pipe(
      tap(_ => this.log(`added trip ${trip.title}`)),
      map((response) => {
        console.log(`Trip ${response.title} created`);
        return response;
      })
    );
  }

  getTrip(id: string): Observable<SearchTripResponse> {
    return this.http.get<SearchTripResponse>(`${environment.apiUrl}/trips/${id}`).pipe(
      tap(_ => this.log(`fectched trip id=${id}`)),
      map((response) => {
        console.log(`Get Trip ${response.title} detail`);
        return response;
      })
    );
  }

  updateTrip(id: string, title?: string, description?: string): Observable<any> {
    const trip: AddTripRequest = {title, description};
    return this.http.patch(`${environment.apiUrl}/trips/${id}`, trip).pipe(
      tap(_ => this.log(`updated trip id=${id}`)),
      map((response) => {
        return response;
      })
    );
  }

  deleteTrip(id: string): Observable<SearchTripResponse> {
    return this.http.delete<SearchTripResponse>(`${environment.apiUrl}/trips/${id}`).pipe(
      tap(_ => this.log(`deleted trip id=${id}`)),
      map((response) => {
        return response;
      })
    );
  }

  searchTrips(term: string): Observable<SearchTripResponse[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<SearchTripResponse[]>(`${environment.apiUrl}/trips/?title=${term}`).pipe(
      tap(x => x.length ? 
        this.log(`found trips matching "${term}"`) : 
        this.log(`no trip matching "${term}"`))
    );
  }

  private log(message: string) {
    this.messageService.add(`TripService: ${message}`);
  }
}
