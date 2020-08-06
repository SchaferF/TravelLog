import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DeletePlaceComponent } from './delete-place/delete-place.component';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

@NgModule({
  declarations: [CreatePlaceComponent, DeletePlaceComponent, PlacesComponent, PlaceDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule
  ],
  exports: [ CreatePlaceComponent]
})
export class PlacesModule { }
