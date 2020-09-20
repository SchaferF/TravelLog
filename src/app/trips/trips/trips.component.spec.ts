import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockTripService } from 'src/app/Mock/mock-trip-service';

import { TripsComponent } from './trips.component';

describe('TripsComponent', () => {
  let component: TripsComponent;
  let tripService: MockTripService;
  let authService: MockAuthService;

  beforeEach(() => {
    tripService = new MockTripService(null, null);
    authService = new MockAuthService(null);
    component = new TripsComponent(tripService, authService);
  });

  afterEach(() => {
    tripService = null;
    authService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
