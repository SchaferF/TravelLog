import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockMessageService } from 'src/app/Mock/mock-message-service';
import { MockRegService } from 'src/app/Mock/mock-reg-service';

import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let router: Router;
  let regService: MockRegService;
  let messageService: MockMessageService;

  beforeEach(() => {
    messageService = new MockMessageService;
    regService = new MockRegService(null, messageService);
    router = null;
    component = new RegisterPageComponent(regService, router);
  });

  afterEach(() => {
    messageService = null;
    router = null;
    regService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
