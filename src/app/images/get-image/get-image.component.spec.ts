import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploaderService } from '../image-uploader.service';

import { GetImageComponent } from './get-image.component';

describe('GetImageComponent', () => {
  let component: GetImageComponent;
  let imageUploaderService: ImageUploaderService;

  beforeEach(() => {
    imageUploaderService = new ImageUploaderService();
    component = new GetImageComponent(imageUploaderService);
  });

  afterEach(() => {
    imageUploaderService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
