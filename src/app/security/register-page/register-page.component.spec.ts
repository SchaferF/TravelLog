import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockRegService } from 'src/app/Mock/mock-reg-service';

import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let router: Router;
  let regService: MockRegService;

  beforeEach(() => {
    regService = new MockRegService(null);
    router = null;
    component = new RegisterPageComponent(regService, router);
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
});
