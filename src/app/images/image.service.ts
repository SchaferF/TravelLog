import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";
import { HandleError } from '../shared/handle-error';
import { ImageResponse } from '../models/image-response';
import { MessageService } from '../shared/services/message.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private headers =  new HttpHeaders().set('Authorization', `Bearer ${environment.qimgToken}`);
  private handleError: HandleError;
  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.handleError = new HandleError(messageService);
  }

  getImages(): Observable<ImageResponse[]> {
    return this.http.get<ImageResponse[]>(`${environment.qimgAPI}`, {headers: this.headers}).pipe(
      tap(_ => this.log(`fetched images`)),
      map((response) => {
        console.log(`Images ${response}`);
        return response;
      }),
      catchError(this.handleError.handleError<ImageResponse[]>('getImages', []))
    );
  }

  delete(id: string): Observable<ImageResponse> {
    return this.http.delete<ImageResponse>(`${environment.qimgAPI}/${id}`, {headers: this.headers}).pipe(
      tap(_ => this.log(`deleted the image id=${id}`)),
      map((response) => {
        return response;
      }),
      catchError(this.handleError.handleError<ImageResponse>('deleteImage'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ImageService: ${message}`);
  }
}
