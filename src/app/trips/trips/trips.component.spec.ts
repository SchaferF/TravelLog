import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockMessageService } from 'src/app/Mock/mock-message-service';
import { MockTripService } from 'src/app/Mock/mock-trip-service';

import { TripsComponent } from './trips.component';

describe('TripsComponent', () => {
  let component: TripsComponent;
  let tripService: MockTripService;
  let authService: MockAuthService;
  let messageService: MockMessageService;

  beforeEach(() => {
    messageService = new MockMessageService();
    tripService = new MockTripService(null, messageService);
    authService = new MockAuthService(null, messageService);
    component = new TripsComponent(tripService, authService);
  });

  afterEach(() => {
    messageService = null;
    tripService = null;
    authService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
