import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MockAuthService } from '../Mock/mock-auth-service';
import { MockTripService } from '../Mock/mock-trip-service'; 
import { MockMessageService } from '../Mock/mock-message-service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let tripService: MockTripService;
  let authService: MockAuthService;
  let messageService: MockMessageService;


  beforeEach(() => {
      messageService = new MockMessageService();
      tripService = new MockTripService(null, null);
      authService = new MockAuthService(null, messageService);
      component = new DashboardComponent(tripService, authService);
  });

  afterEach(() => {
    messageService = null;
    tripService = null;
    authService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
