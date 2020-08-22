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

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'travel-log'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('travel-log');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('travel-log app is running!');
  });
});
