import { TestBed, getTestBed } from '@angular/core/testing';

import { MockPlaceService } from './mock-place-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockMessageService } from './mock-message-service';

describe('MockPlaceService', () => {
  let service: MockPlaceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockPlaceService, MockMessageService]
    });
    injector = getTestBed();
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MockPlaceService);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
