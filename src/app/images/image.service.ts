import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { ImageResponse } from '../models/image-response';
import { MessageService } from '../shared/services/message.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private headers =  new HttpHeaders().set('Authorization', `Bearer ${environment.qimgToken}`);

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getImages(): Observable<ImageResponse[]> {
    return this.http.get<ImageResponse[]>(`${environment.qimgAPI}`, {headers: this.headers}).pipe(
      tap(_ => this.log(`fetched images`)),
      map((response) => {
        console.log(`Images ${response}`);
        return response;
      })
    );
  }

  //addImage(data: string): Observable<ImageResponse> {
  //  const body = `data: ${data}`;
  //  return this.http.post<ImageResponse>(`${environment.qimgAPI}`, body, {headers: this.headers}).pipe(
  //    tap(_ => this.log(`Added image ${data}`)),
  //    map((response) => {
  //      console.log(response);
  //      return response;
  //    })
  //  );
  //}

  delete(id: string): Observable<ImageResponse> {
    return this.http.delete<ImageResponse>(`${environment.qimgAPI}/${id}`, {headers: this.headers}).pipe(
      tap(_ => this.log(`deleted the image id=${id}`)),
      map((response) => {
        return response;
      })
    );
  }

  private log(message: string) {
    this.messageService.add(`ImageService: ${message}`);
  }
}
