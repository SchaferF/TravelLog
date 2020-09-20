import { Injectable } from '@angular/core';
import { PlaceService } from '../places/place.service';
import { AddPlaceRequest } from '../models/add-place-request';
import { AddPlaceResponse } from '../models/add-place-response';
import { SearchPlaceRequest } from '../models/search-place-request';
import { SearchPlaceResponse } from '../models/search-place-response';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../shared/services/message.service';
import { Observable, of } from 'rxjs';
import { tap, map, retry, repeat } from "rxjs/operators";
import { Point } from 'geojson';

@Injectable()
export class MockPlaceService extends PlaceService{
    private point : Point = {'type': 'Point', 'coordinates' : [1,1]};
    private searchPlaceResponses : SearchPlaceResponse[] = [
        {
          'id': 'MOCKED_ID_1',
          'href': 'MOCKED_HREF_1',
          'name': 'MOCKED_NAME_1',
          'location': this.point,
          'description': 'MOCKED_DECRITPION_1',
          'pictureUrl': 'MOCKED_PICTURE_URL',
          'tripId': 'MOCKED_TRIPID_1',
          'tripHref': 'MOCKED_TRIPHREF_1',
          'createdAt': new Date(2020,1,1),
          'updatedAt': new Date(2020,12,31)
        }
    ] 

    getPlaces(): Observable<SearchPlaceResponse[]> {
        return new Observable<SearchPlaceResponse[]>().pipe(
          map(() => {
            return this.searchPlaceResponses;
          })
        );
      }
    
      getPlacesByTripId(id: string): Observable<SearchPlaceResponse[]> {
        return new Observable<SearchPlaceResponse[]>().pipe(
          map(() => {
            return this.searchPlaceResponses.filter(x => x.id == id);
          })
        )
      }
    
      addPlace(place: AddPlaceRequest): Observable<AddPlaceResponse> {
        return new Observable<AddPlaceResponse>().pipe(
          map(() => {
            let response: AddPlaceResponse = new AddPlaceResponse();
            response.id = 'MOCKED_ID_1';
            response.href = 'MOCKED_HREF_1';
            response.name = place.name;
            response.description = place.description;
            response.location = place.location;
            response.pictureUrl = place.pictureUrl;
            response.tripId = place.tripId;
            response.tripHref = place.tripHref;
            response.createdAt = new Date(2020,1,1).toString();
            response.updatedAt = new Date(2020,12,31).toString();
            return response;
          })
        );
      }
    
      getPlace(id: string): Observable<SearchPlaceResponse> {
        return new Observable<SearchPlaceResponse>().pipe(
          map(() => {
              return this.searchPlaceResponses.find(x => x.id == id);
          })
        );
      }
    
      updatePlace(id: string, name?: string, description?: string, location?: Point, tripHref?: string, tripId?: string, pictureUrl?: string ): Observable<any> {
        const place: AddPlaceRequest = {name, description, location, tripHref, tripId, pictureUrl};
        return new Observable<any>().pipe(
          map(() => {
            return true;
          })
        );
      }
    
      delete(id: string): Observable<SearchPlaceResponse> {
        return new Observable<SearchPlaceResponse>().pipe(
          map(() => {
            return this.searchPlaceResponses.find(x => x.id == id);
          })
        );
      }
    
      searchPlaces(term: string): Observable<SearchPlaceResponse[]> {
        if(!term.trim()){
          return of([]);
        }
        return new Observable<SearchPlaceResponse[]>().pipe(
          map (() => {
              return this.searchPlaceResponses.filter(x => x.name.match(term));
          })
        );
      }
}
