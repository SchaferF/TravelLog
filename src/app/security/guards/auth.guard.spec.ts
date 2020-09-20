import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: MockAuthService;
  let router: Router;

  beforeEach(() => {
    authService = new MockAuthService(null);
    router = null;
    guard = new AuthGuard(authService, router);
  });

  afterEach(() => {
    authService = null;
    router = null;
    guard = null;
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
