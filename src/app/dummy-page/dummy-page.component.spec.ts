import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockUserService } from '../Mock/mock-user-service';

import { DummyPageComponent } from './dummy-page.component';

describe('DummyPageComponent', () => {
  let component: DummyPageComponent;
  let userService: MockUserService;

  beforeEach(() => {
    userService = new MockUserService(null);
    component = new DummyPageComponent(userService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
