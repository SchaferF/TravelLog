import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

@NgModule({
  declarations: [CreateTripComponent, DeleteTripComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateTripComponent, DeleteTripComponent],
})
export class TripsModule { }
