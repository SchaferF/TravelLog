import { TestBed, getTestBed } from '@angular/core/testing';

import { MockAuthService } from './mock-auth-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { MockMessageService } from './mock-message-service';


describe('MockAuthService', () => {
  let service: MockAuthService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let messageService: MockMessageService;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockAuthService]
    });
    messageService = new MockMessageService();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = new MockAuthService(null, messageService);
  });

  afterEach(() => {
    httpMock.verify();
    messageService = null;
    service = null;
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
