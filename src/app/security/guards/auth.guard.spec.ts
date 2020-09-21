import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockMessageService } from 'src/app/Mock/mock-message-service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: MockAuthService;
  let messageService: MockMessageService;
  let router: Router;

  beforeEach(() => {
    messageService = new MockMessageService();
    authService = new MockAuthService(null, messageService);
    router = null;
    guard = new AuthGuard(authService, router);
  });

  afterEach(() => {
    messageService = null;
    authService = null;
    router = null;
    guard = null;
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
