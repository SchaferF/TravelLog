import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockDelService } from 'src/app/Mock/mock-del-service';

import { DeleteButtonComponent } from './delete-button.component';

describe('DeletePageComponent', () => {
  let component: DeleteButtonComponent;
  let delService: MockDelService;
  let auth: MockAuthService;

  beforeEach(() => {
    auth = new MockAuthService(null);
    delService = new MockDelService(null);
    component = new DeleteButtonComponent(delService, auth);
  });

  afterEach(() => {
    auth = null;
    delService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
