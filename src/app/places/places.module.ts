import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [CreatePlaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule
  ],
  exports: [ CreatePlaceComponent]
})
export class PlacesModule { }
