import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from 'src/app/Mock/mock-auth-service';
import { MockDelService } from 'src/app/Mock/mock-del-service';
import { MockMessageService } from 'src/app/Mock/mock-message-service';

import { DeleteButtonComponent } from './delete-button.component';

describe('DeletePageComponent', () => {
  let component: DeleteButtonComponent;
  let delService: MockDelService;
  let auth: MockAuthService;
  let messageService: MockMessageService;

  beforeEach(() => {
    messageService = new MockMessageService();
    auth = new MockAuthService(null, messageService);
    delService = new MockDelService(null, messageService);
    component = new DeleteButtonComponent(delService, auth);
  });

  afterEach(() => {
    messageService = null;
    auth = null;
    delService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
