import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GeolocationService } from '../../shared/services/geolocation.service';
import {} from '@angular/common';
import { MockPlaceService } from 'src/app/Mock/mock-place-service';

import { CreatePlaceComponent } from './create-place.component';

describe('CreatePlaceComponent', () => {
  let component: CreatePlaceComponent;
  let placeService: MockPlaceService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let geoLocationService: GeolocationService;
  let location: Location;

  beforeEach(() => {
    router = null;
    location = null;
    geoLocationService = null;
    activatedRoute = null;
    placeService = new MockPlaceService(null, null);
    component = new CreatePlaceComponent(placeService, router, geoLocationService, activatedRoute, location);
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
