import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TripDetailComponent } from './trip-detail.component';
import { MockTripService } from 'src/app/Mock/mock-trip-service';

describe('TripDetailComponent', () => {
  let component: TripDetailComponent;
  let activatedRoute: ActivatedRoute;
  let location: Location;
  let tripService: MockTripService;

  beforeEach(() => {
    activatedRoute = null;
    location = null;
    tripService = new MockTripService(null, null);
    component = new TripDetailComponent(activatedRoute, tripService, location);
  });

  afterEach(() => {
    activatedRoute = null;
    location = null;
    tripService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
