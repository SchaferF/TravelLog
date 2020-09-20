import { Injectable } from '@angular/core';
import { RegService } from '../security/reg.service';
import { RegRequest } from '../models/reg-request';
import { RegResponse } from '../models/reg-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class MockRegService extends RegService{
    register(regRequest: RegRequest): Observable<RegResponse> {
        return new Observable<RegResponse>().pipe(
          map(() => {
            let response = new RegResponse();
            response.id = 'MOCKED_ID_1';
            response.href = 'MOCKED_HREF_1';
            response.name = 'MOCKED_NAME_1';
            response.tripsCount = 0;
            response.createdAt = new Date(2020,1,1);
            response.updatedAt = new Date(2020,12,31);
            return response;
          })
        );
      }
}
