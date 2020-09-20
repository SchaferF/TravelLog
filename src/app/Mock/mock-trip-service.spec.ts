import { TestBed, getTestBed } from '@angular/core/testing';

import { MockTripService } from './mock-trip-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('MockTripService', () => {
  let service: MockTripService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockTripService]
    });
    injector = getTestBed();
    service = injector.get(MockTripService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
