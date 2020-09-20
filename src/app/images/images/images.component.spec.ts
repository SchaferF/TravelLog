import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockImageService } from 'src/app/Mock/mock-image-service';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let imageService: MockImageService;

  beforeEach(() => {
    imageService = new MockImageService(null, null);
    component = new ImagesComponent(imageService);
  });

  afterEach(() => {
    imageService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
