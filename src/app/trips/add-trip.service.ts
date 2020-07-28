import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { AddTripResponse } from "../models/add-trip-response";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AddTripRequest } from "../models/add-trip-request";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddTripService {

  constructor(private http: HttpClient) { 

  }

  /**
   * Add a trip 
   * @param addTrip
   */
  addTrip(trip: AddTripRequest): Observable<AddTripResponse>{
    return this.http.post<AddTripResponse>(`${environment.apiUrl}/trips`, trip).pipe(
      map((response) => {
        console.log(`Trip ${response.title} created`);
        return response;
      })
    );
  }

}
