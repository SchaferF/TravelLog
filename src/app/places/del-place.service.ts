import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DelPlaceService {

  constructor(private http: HttpClient) { 

  }

  delete(id: string): void {
    this.http.delete(`${environment.apiUrl}/places/${id}`).pipe(
      map((response) => {
        console.log(`Place ${response} delete`);
      })
    );
  }

}
