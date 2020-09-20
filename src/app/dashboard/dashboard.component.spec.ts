import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MockAuthService } from '../Mock/mock-auth-service';
import { MockTripService } from '../Mock/mock-trip-service'; 


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let tripService: MockTripService;
  let authService: MockAuthService;


  beforeEach(() => {
      tripService = new MockTripService(null, null);
      authService = new MockAuthService(null);
      component = new DashboardComponent(tripService, authService);
  });

  afterEach(() => {
    tripService = null;
    authService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
