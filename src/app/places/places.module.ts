import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { CommentsComponent } from '../shared/comments/comments.component';
import { ImagesModule } from '../images/images.module';

@NgModule({
  declarations: [CreatePlaceComponent, PlacesComponent, PlaceDetailComponent, PlaceSearchComponent, CommentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule,
    AppRoutingModule,
    ImagesModule,
  ],
  exports: [ CreatePlaceComponent, PlacesComponent, PlaceDetailComponent, PlaceSearchComponent]
})
export class PlacesModule { }
