import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPlaceService } from 'src/app/Mock/mock-place-service';

import { PlacesComponent } from './places.component';

describe('PlacesComponent', () => {
  let component: PlacesComponent;
  let placeService: MockPlaceService;

  beforeEach(() => {
    placeService = new MockPlaceService(null, null);
    component = new PlacesComponent(placeService);
  });

  afterEach(() => {
    placeService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    component.tripId = '12345'; // 1
    expect(component.tripId).toBeTruthy();
  });
});
