import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockTripService } from 'src/app/Mock/mock-trip-service';

import { CreateTripComponent } from './create-trip.component';

describe('CreateTripComponent', () => {
  let component: CreateTripComponent;
  let router: Router;
  let tripService: MockTripService;

  beforeEach(() => {
    router = null;
    tripService = new MockTripService(null, null);
    component = new CreateTripComponent(tripService, router);
  });

  afterEach(() => {
    router = null;
    tripService = null
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
