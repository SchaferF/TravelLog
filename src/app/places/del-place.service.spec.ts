import { TestBed } from '@angular/core/testing';

import { DelPlaceService } from './del-place.service';

describe('DelPlaceService', () => {
  let service: DelPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
