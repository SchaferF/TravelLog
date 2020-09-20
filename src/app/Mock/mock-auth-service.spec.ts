import { TestBed, getTestBed } from '@angular/core/testing';

import { MockAuthService } from './mock-auth-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';


describe('MockAuthService', () => {
  let service: MockAuthService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockAuthService]
    });
    injector = getTestBed();
    service = injector.get(MockAuthService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});