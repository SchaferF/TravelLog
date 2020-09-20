import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let authService: MockAuthService;
  let router: Router;

  beforeEach(() => {
    authService = new MockAuthService(null);
    router = null;
    component = new LoginPageComponent(authService, router);
  });

  afterEach(() => {
    authService = null;
    router = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
