import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommentsComponent } from './shared/comments/comments.component';
import { MessagesComponent } from './shared/messages/messages.component';

import { PlacesComponent } from './places/places/places.component';
import { CreatePlaceComponent } from './places/create-place/create-place.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceSearchComponent } from './places/place-search/place-search.component';

import { TripsComponent } from './trips/trips/trips.component';
import { CreateTripComponent } from './trips/create-trip/create-trip.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripSearchComponent } from './trips/trip-search/trip-search.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { DummyPageComponent } from './dummy-page/dummy-page.component';

import { DeleteButtonComponent } from './security/delete-button/delete-button.component';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { LogoutButtonComponent } from './security/logout-button/logout-button.component';
import { RegisterPageComponent } from './security/register-page/register-page.component';
import { MockAuthService } from './Mock/mock-auth-service';
import { MockMessageService } from './Mock/mock-message-service';

describe('AppComponent', () => {
  let authService: MockAuthService;
  let messageService: MockMessageService;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        DeleteButtonComponent,
        DummyPageComponent,
        DashboardComponent,
        CommentsComponent,
        LoginPageComponent,
        LogoutButtonComponent,
        RegisterPageComponent,
        MessagesComponent,
        TripsComponent,
        CreateTripComponent,
        TripDetailComponent,
        TripSearchComponent,
        PlacesComponent,
        PlaceSearchComponent,
        PlaceDetailComponent,
        CreatePlaceComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    messageService = new MockMessageService();
    authService = new MockAuthService(null, messageService);
    app = new AppComponent(authService);
  })

  afterEach(() => {
    messageService = null;
    authService = null;
    app = null;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'travel-log'`, () => {
    expect(app.title).toEqual('travel-log');
  });

});
