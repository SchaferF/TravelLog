import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { ImageResponse } from '../models/image-response';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = 'https://comem-qimg.herokuapp.com/api/images';
  private token = '6DYZ4B0Z5FncI8McE6hqR0Vz4VIWunyQfpVsU9BIU37d8+Qft5tJgN/vAQGR/fAYsg60kCARyYqQRM6JTHJ0faA96ESiJjYcz8DsOjIXEBoFJJSPa0VIOSkEaaK2S71xpu/aD6WLPzSeqCYVA+0ObaaYp/FPVW0ODKyzBh5MHlQ=';
  private headers =  new HttpHeaders().set("Authorization", `Bearer ${this.token}`);

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getImages(): Observable<ImageResponse[]> {
    return this.http.get<ImageResponse[]>(this.url, {headers: this.headers}).pipe(
      tap(_ => this.log(`fetched images`)),
      map((response) => {
        console.log(`Images ${response}`);
        return response;
      })
    );
  }

  addImage(data: string): Observable<ImageResponse> {
    const body = `data: ${data}`;
    return this.http.post<ImageResponse>(this.url, body, {headers: this.headers}).pipe(
      tap(_ => this.log(`Added image ${data}`)),
      map((response) => {
        console.log(response);
        return response;
      })
    );
  }

  delete(id: string): Observable<ImageResponse> {
    return this.http.delete<ImageResponse>(`${this.url}/${id}`).pipe(
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
