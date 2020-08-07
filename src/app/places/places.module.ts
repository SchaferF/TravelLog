import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceSearchComponent } from './place-search/place-search.component';

@NgModule({
  declarations: [CreatePlaceComponent, PlacesComponent, PlaceDetailComponent, PlaceSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule,
    AppRoutingModule
  ],
  exports: [ CreatePlaceComponent, PlacesComponent, PlaceDetailComponent, PlaceSearchComponent]
})
export class PlacesModule { }
