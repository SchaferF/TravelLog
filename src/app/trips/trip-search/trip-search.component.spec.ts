import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockTripService } from 'src/app/Mock/mock-trip-service';

import { TripSearchComponent } from './trip-search.component';

describe('TripSearchComponent', () => {
  let component: TripSearchComponent;
  let tripService: MockTripService;

  beforeEach(() => {
    tripService = new MockTripService(null, null);
    component = new TripSearchComponent(tripService);
  });

  afterEach(() => {
    tripService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
