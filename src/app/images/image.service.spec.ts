import { TestBed, getTestBed } from '@angular/core/testing';

import { ImageService } from './image.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ImageService', () => {
  let service: ImageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImageService]
    });
    injector = getTestBed();
    service = injector.get(ImageService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });    

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
