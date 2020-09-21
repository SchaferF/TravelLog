import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";
import { Point } from 'geojson';
import { HandleError } from '../shared/handle-error';
import { AddPlaceRequest } from '../models/add-place-request';
import { AddPlaceResponse } from '../models/add-place-response';
import { SearchPlaceResponse } from '../models/search-place-response';
import { MessageService } from '../shared/services/message.service';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private handleError: HandleError;
  constructor(private http: HttpClient, private messageService: MessageService) {
    this.handleError = new HandleError(messageService);
   }

  getPlaces(): Observable<SearchPlaceResponse[]> {
    return this.http.get<SearchPlaceResponse[]>(`${environment.apiUrl}/places`).pipe(
      tap(_ => this.log('fetched places')),
      map((response) => {
        console.log(`Places ${response}`);
        return response;
      }),
      catchError(this.handleError.handleError<SearchPlaceResponse[]>('getPlaces', []))
    );
  }

  getPlacesByTripId(id: string): Observable<SearchPlaceResponse[]> {
    return this.http.get<SearchPlaceResponse[]>(`${environment.apiUrl}/places/?trip=${id}`).pipe(
      tap(_ => this.log(`fetched places for trip id=${id}`)),
      map((response) => {
        console.log(`Places ${response}`);
        return response;
      }),
      catchError(this.handleError.handleError<SearchPlaceResponse[]>('getPlacesByTripId', []))
    )
  }

  addPlace(place: AddPlaceRequest): Observable<AddPlaceResponse> {
    return this.http.post<AddPlaceResponse>(`${environment.apiUrl}/places`, place).pipe(
      tap(_ => this.log(`Added place ${place.name}`)),
      map((response) => {
        console.log(`Place ${place.name} created`);
        return response;
      }),
      catchError(this.handleError.handleError<AddPlaceResponse>('addPlace'))
    );
  }

  getPlace(id: string): Observable<SearchPlaceResponse> {
    return this.http.get<SearchPlaceResponse>(`${environment.apiUrl}/places/${id}`).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      map((response) => {
          console.log(`Get place ${response.name} details`);
          return response;
      }),
      catchError(this.handleError.handleError<SearchPlaceResponse>('getPlace'))
    );
  }

  updatePlace(id: string, name?: string, description?: string, location?: Point, tripHref?: string, tripId?: string, pictureUrl?: string ): Observable<any> {
    const place: AddPlaceRequest = {name, description, location, tripHref, tripId, pictureUrl};
    return this.http.patch(`${environment.apiUrl}/places/${id}`, place).pipe(
      tap(_ => this.log(`updated place id=${id}`)),
      map((response) => {
        return response;
      }),
      catchError(this.handleError.handleError('updatePlace'))
    );
  }

  delete(id: string): Observable<SearchPlaceResponse> {
    return this.http.delete<SearchPlaceResponse>(`${environment.apiUrl}/places/${id}`).pipe(
      tap(_ => this.log(`deleted place id=${id}`)),
      map((response) => {
        return response;
      }),
      catchError(this.handleError.handleError<SearchPlaceResponse>('deletePlace'))
    );
  }

  searchPlaces(term: string): Observable<SearchPlaceResponse[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<SearchPlaceResponse[]>(`${environment.apiUrl}/places/?name=${term}`).pipe(
      tap(x => x.length ? 
        this.log(`found places matching "${term}"`) : 
        this.log(`no place matching "${term}"`)),
      catchError(this.handleError.handleError<SearchPlaceResponse[]>('searchPlaces', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`PlaceService: ${message}`);
  }
}
