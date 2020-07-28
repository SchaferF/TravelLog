import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip/create-trip.component';

@NgModule({
  declarations: [CreateTripComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateTripComponent],
})
export class TripsModule { }
