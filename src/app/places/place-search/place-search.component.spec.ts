import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPlaceService } from 'src/app/Mock/mock-place-service';

import { PlaceSearchComponent } from './place-search.component';

describe('PlaceSearchComponent', () => {
  let component: PlaceSearchComponent;
  let placeService: MockPlaceService;

  beforeEach(() => {
    placeService = new MockPlaceService(null,null);
    component = new PlaceSearchComponent(placeService);
  });

  afterEach(() => {
    placeService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
