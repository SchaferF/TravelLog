import { TestBed, getTestBed } from '@angular/core/testing';

import { ApiTokenInterceptorService } from './api-token-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ApiTokenInterceptorService', () => {
  let service: ApiTokenInterceptorService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiTokenInterceptorService]
    });
    injector = getTestBed();
    service = injector.get(ApiTokenInterceptorService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });    

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
