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


const routes: Routes = [
  // Add this default route to redirect to dummy
  { path: "", redirectTo: "dummy", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "registration", component: RegisterPageComponent },
  { path: "trips", component: TripsComponent},
  { path: "places", component: PlacesComponent},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'trips/detail/:id', component: TripDetailComponent},
  { path: 'trips/create', component: CreateTripComponent},
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
