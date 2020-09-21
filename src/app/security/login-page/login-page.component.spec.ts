import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { MockMessageService } from 'src/app/Mock/mock-message-service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let authService: MockAuthService;
  let messageService: MockMessageService;
  let router: Router;

  beforeEach(() => {
    messageService = new MockMessageService();
    authService = new MockAuthService(null, messageService);
    router = null;
    component = new LoginPageComponent(authService, router);
  });

  afterEach(() => {
    messageService = null;
    authService = null;
    router = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
