import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { RegResponse } from "../models/reg-response";
import { HttpClient } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";
import { User } from "../models/user";
import { RegRequest } from "../models/reg-request";
import { environment } from "../../environments/environment";
import { HandleError } from '../shared/handle-error';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  private handleError: HandleError;
  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.handleError = new HandleError(messageService);
  }

  /**
   * Register a new account
   */
  register(regRequest: RegRequest): Observable<RegResponse> {
    return this.http.post<RegResponse>(`${environment.apiUrl}/users`, regRequest).pipe(
      map((response) => {
        this.log(`User ${response.name} register in`);
        return response;
      }),
      catchError(this.handleError.handleError<RegResponse>('register'))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }
}
