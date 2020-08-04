import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DelTripService {

  constructor(private http: HttpClient) { 

  }

  delete(id: string): Observable<object> {
    return this.http.delete<object>(`${environment.apiUrl}/trips/${id}`).pipe(
      map((response) => {
        console.log(`Delete ${response}`);
        return response;
      })
    );
  }

}
