import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';
import { SearchPlaceResponse } from '../../models/search-place-response';
import { latLng, Map, MapOptions, marker, Marker, tileLayer} from 'leaflet';
import { defaultIcon } from 'src/app/shared/default-marker';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() tripId: string;

  mapMarkers: Marker[];
  mapOptions: MapOptions;
  map: Map;
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    }
  };

  places: SearchPlaceResponse[];

  constructor(private placeService: PlaceService) {
    this.mapOptions = {
      layers: [
        this.streetMaps
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };    
   }

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces(): void{
   this.placeService.getPlacesByTripId(this.tripId)
    .subscribe(places => {
      this.places = places;
      this.updateMarkers();
    });
  }

  delete(place : SearchPlaceResponse): void{
    this.places = this.places.filter(p => p !== place);
    this.updateMarkers();
    this.placeService.delete(place.id).subscribe();
  }

  private updateMarkers(): void {
    this.mapMarkers = [];
    this.places.forEach(place => {
      this.mapMarkers.push(marker(latLng(place.location.coordinates[0], place.location.coordinates[1]), {icon: defaultIcon }).bindTooltip(place.name));
    });
    if(this.places.length >= 1){
      const center = latLng(this.places[0].location.coordinates[0], this.places[0].location.coordinates[1]);
      this.mapOptions = {
        layers: [
          this.streetMaps
        ],
        zoom: 10,
        center: center
      }; 
    }
  }
}
