import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { RegResponse } from "../models/reg-response";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { User } from "../models/user";
import { RegRequest } from "../models/reg-request";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { 

  }

  /**
   * Register a new account
   */
  register(regRequest: RegRequest): Observable<RegResponse> {
    return this.http.post<RegResponse>(`${environment.apiUrl}/users`, regRequest).pipe(
      map((response) => {
        console.log(`User ${response.name} register in`);
        return response;
      })
    );
  }
}
