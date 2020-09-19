import { TestBed, getTestBed } from '@angular/core/testing';

import { DelService } from './del.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('DelService', () => {
  let service: DelService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DelService]
    });
    injector = getTestBed();
    service = injector.get(DelService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  

});
