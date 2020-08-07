import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { Point } from 'geojson';

import { AddPlaceRequest } from '../models/add-place-request';
import { AddPlaceResponse } from '../models/add-place-response';
import { SearchPlaceResponse } from '../models/search-place-response';
import { MessageService } from '../shared/services/message.service';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPlaces(): Observable<SearchPlaceResponse[]> {
    return this.http.get<SearchPlaceResponse[]>(`${environment.apiUrl}/places`).pipe(
      tap(_ => this.log('fetched places')),
      map((response) => {
        console.log(`Places ${response}`);
        return response;
      })
    );
  }

  addPlace(place: AddPlaceRequest): Observable<AddPlaceResponse> {
    return this.http.post<AddPlaceResponse>(`${environment.apiUrl}/places`, place).pipe(
      tap(_ => this.log(`Added place ${place.name}`)),
      map((response) => {
        console.log(`Place ${place.name} created`);
        return response;
      })
    );
  }

  getPlace(id: string): Observable<SearchPlaceResponse> {
    return this.http.get<SearchPlaceResponse>(`${environment.apiUrl}/palces/${id}`).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      map((response) => {
          console.log(`Get place ${response.name} details`);
          return response;
      })
    );
  }

  updatePlace(id: string, name?: string, description?: string, location?: Point, tripHref?: string, tripId?: string, pictureUrl?: string ): Observable<any> {
    const place: AddPlaceRequest = {name, description, location, tripHref, tripId, pictureUrl};
    return this.http.patch(`${environment.apiUrl}/places/${id}`, place).pipe(
      tap(_ => this.log(`updated place id=${id}`)),
      map((response) => {
        return response;
      })
    );
  }

  delete(id: string): Observable<SearchPlaceResponse> {
    return this.http.delete<SearchPlaceResponse>(`${environment.apiUrl}/places/${id}`).pipe(
      tap(_ => this.log(`deleted place id=${id}`)),
      map((response) => {
        return response;
      })
    );
  }

  searchPlaces(term: string): Observable<SearchPlaceResponse[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<SearchPlaceResponse[]>(`${environment.apiUrl}/places/?name=${term}`).pipe(
      tap(x => x.length ? 
        this.log(`found places matching "${term}"`) : 
        this.log(`no place matching "${term}"`))
    );
  }

  private log(message: string) {
    this.messageService.add(`PlaceService: ${message}`);
  }
}
