import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { RegResponse } from "../models/reg-response";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { User } from "../models/user";
import { DelAuthRequest } from "../models/del-auth-request";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DelService {

  constructor(private http: HttpClient) { 

  }

  /**
   * Delete an account
   */
  delete(delRequest: DelAuthRequest): void {
    this.http.delete(`${environment.apiUrl}/users/${delRequest.id}`).pipe(
      map((response) => {
        console.log(`User ${response} delete`);
      })
    );
    console.log("delete invoked");
  }
}
