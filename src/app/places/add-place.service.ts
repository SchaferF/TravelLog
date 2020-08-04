import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { AddPlaceResponse } from "../models/add-place-response";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AddPlaceRequest } from "../models/add-place-request";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddPlaceService {

  constructor(private http: HttpClient) { 

  }

  addPlace(place: AddPlaceRequest): Observable<AddPlaceResponse> {
    return this.http.post<AddPlaceResponse>(`${environment.apiUrl}/places`, place).pipe(
      map((response) => {
        console.log(`Place ${response.name} created`);
        return response;
      })
    );
  }
}
