import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { AuthGuard } from './security/guards/auth.guard';
import { RegisterPageComponent } from './security/register-page/register-page.component';
import { TripsComponent } from './trips/trips/trips.component';
import { PlacesComponent } from './places/places/places.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { CreateTripComponent } from './trips/create-trip/create-trip.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { CreatePlaceComponent } from './places/create-place/create-place.component';


const routes: Routes = [
  // Add this default route to redirect to dummy
  { path: "", redirectTo: "dummy", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "registration", component: RegisterPageComponent },
  { path: "trips", component: TripsComponent, canActivate: [AuthGuard]},
  { path: "places", component: PlacesComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'trips/details/:id', component: TripDetailComponent, canActivate: [AuthGuard]},
  { path: 'trips/create', component: CreateTripComponent, canActivate: [AuthGuard]},
  { path: 'places/details/:id', component: PlaceDetailComponent, canActivate: [AuthGuard]},
  { path: 'places/create', component: CreatePlaceComponent, canActivate: [AuthGuard]},
  // Add the route to display the dummy page
  {
    path: "dummy",
    component: DummyPageComponent,
    // Prevent access to this page to unauthenticated users
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
