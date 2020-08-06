import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

@NgModule({
  declarations: [CreateTripComponent, DeleteTripComponent, TripsComponent, TripDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateTripComponent, DeleteTripComponent, TripsComponent, TripDetailComponent],
})
export class TripsModule { }
