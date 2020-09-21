import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockMessageService } from 'src/app/Mock/mock-message-service';

import { LogoutButtonComponent } from './logout-button.component';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let authService: MockAuthService;
  let messageService: MockMessageService;
  let router: Router;

  beforeEach(() => {
    messageService = new MockMessageService();
    authService = new MockAuthService(null, messageService);
    router = null;
    component = new LogoutButtonComponent(authService, router);
  });

  afterEach(() => {
    messageService == null;
    authService = null;
    router = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
