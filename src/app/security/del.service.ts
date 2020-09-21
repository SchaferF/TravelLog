import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { RegResponse } from "../models/reg-response";
import { HttpClient } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";
import { HandleError } from '../shared/handle-error';
import { MessageService } from '../shared/services/message.service';
import { User } from "../models/user";
import { DelAuthRequest } from "../models/del-auth-request";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DelService {
  private handleError: HandleError;
  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.handleError = new HandleError(messageService);
  }

  /**
   * Delete an account
   */
  delete(delRequest: DelAuthRequest): void {
    this.http.delete(`${environment.apiUrl}/users/${delRequest.id}`).pipe(
      map((response) => {
        this.log(`User ${response} delete`);
      }),
      catchError(this.handleError.handleError('deleteAccount'))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }
}
