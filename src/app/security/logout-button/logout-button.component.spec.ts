import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';

import { LogoutButtonComponent } from './logout-button.component';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let authService: MockAuthService;
  let router: Router;

  beforeEach(() => {
    authService = new MockAuthService(null);
    router = null;
    component = new LogoutButtonComponent(authService, router);
  });

  afterEach(() => {
    authService = null;
    router = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
