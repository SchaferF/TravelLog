import { TripService } from '../trips/trip.service';
import { SearchTripResponse } from '../models/search-trip-response';
import { AddTripRequest } from '../models/add-trip-request';
import { AddTripResponse } from '../models/add-trip-response';
import { Observable } from 'rxjs';
import { tap, map, retry } from "rxjs/operators";


export class MockTripService extends TripService{
    private searchTripResponse: SearchTripResponse[] = [{
        'id': '1',
        'href': 'MOCKED_HREF',
        'title': 'MOCKED_TRIP',
        'description': 'MOCKED_DESCRITPION',
        'placesCount': 0,
        'userId': 'MOCEKED_USER_ID',
        'userHref': 'MOCKED_USER_HREF',
        'createdAt': new Date(2020, 1, 1),
        'updatedAt': new Date(2020, 12, 31)       
    }];

    private filteredSearchTripResponse: SearchTripResponse[];
    
    getTrip(id: string): Observable<SearchTripResponse> {
        return new Observable<SearchTripResponse>().pipe(
            map(() => {
                return this.searchTripResponse[1];
            })
        );
    }

    getTrips(userId?: string): Observable<SearchTripResponse[]> {
        return new Observable<SearchTripResponse[]>().pipe(
            map(() => {
                if(userId) {
                    this.filteredSearchTripResponse = this.searchTripResponse.filter(x => x.userId == userId);
                }
                else
                {
                    this.filteredSearchTripResponse = this.searchTripResponse;
                }
                return this.filteredSearchTripResponse;
            })
        );
    }

    addTrip(trip: AddTripRequest): Observable<AddTripResponse> {
        return new Observable<AddTripResponse>().pipe(
            map(() => {
                return new AddTripResponse();
            })
        );
    }

    updateTrip(id: string, title?: string, description?: string): Observable<any> {
        return new Observable<any>().pipe(
            map(() => {
                let response: AddTripResponse = new AddTripResponse();
                response.id = id;
                if(title) response.title = title;
                if(description) response.description = description;    
                return response;
            })
        );
    }

    deleteTrip(id: string): Observable<SearchTripResponse>{
        return new Observable<SearchTripResponse>().pipe(
            map(() => {
                this.filteredSearchTripResponse = this.searchTripResponse.filter(x => x.id == id);
                return this.filteredSearchTripResponse[1];
            })
        );
    }

    searchTrips(term: string): Observable<SearchTripResponse[]> {
        return new Observable<SearchTripResponse[]>().pipe(
            map(() => {
                this.filteredSearchTripResponse = this.searchTripResponse.filter(x => x.title == term);
                return this.filteredSearchTripResponse;
            })
        )
    }

}
