import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MockPlaceService } from 'src/app/Mock/mock-place-service';
import { GeolocationService } from 'src/app/shared/services/geolocation.service';

import { PlaceDetailComponent } from './place-detail.component';

describe('PlaceDetailComponent', () => {
  let component: PlaceDetailComponent;
  let router: Router;
  let placeService: MockPlaceService;
  let activatedRoute: ActivatedRoute;
  let location: Location;
  let geo: GeolocationService;

  beforeEach(() => {
    router = null;
    activatedRoute = null;
    location = null;
    geo = new GeolocationService();
    placeService = new MockPlaceService(null, null);
    component = new PlaceDetailComponent(activatedRoute, placeService, location, geo);
  });

  afterEach(() => {
    router = null;
    activatedRoute = null;
    location = null;
    geo = null;
    placeService = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
