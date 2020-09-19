import { TestBed, getTestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

describe('MessageService', () => {
  let service: MessageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService]
    });
    injector = getTestBed();
    service = injector.get(MessageService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
