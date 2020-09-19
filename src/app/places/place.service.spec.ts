import { TestBed, getTestBed } from '@angular/core/testing';

import { PlaceService } from './place.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('PlaceService', () => {
  let service: PlaceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlaceService]
    });
    injector = getTestBed();
    service = injector.get(PlaceService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
});
