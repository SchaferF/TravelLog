import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { PlacesModule } from '../places/places.module';

@NgModule({
  declarations: [CreateTripComponent, TripsComponent, TripDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PlacesModule
  ],
  exports: [CreateTripComponent, TripsComponent, TripDetailComponent],
})
export class TripsModule { }
