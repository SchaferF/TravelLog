import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { PlaceService } from '../place.service';
import { SearchPlaceResponse } from '../../models/search-place-response';
import { latLng, Map, MapOptions, marker, Marker, MarkerOptions, tileLayer} from 'leaflet';
import { defaultIcon } from 'src/app/shared/default-marker';
import { GeolocationService } from '../../shared/services/geolocation.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

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

  place: SearchPlaceResponse;

  production: boolean;

  constructor(private route: ActivatedRoute, 
    private placeService: PlaceService, 
    private location: Location,
    private geo: GeolocationService) {
      this.mapOptions = {
        layers: [
          tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { maxZoom: 18 }
          )
        ],
        zoom: 13,
        center: latLng(46.778186, 6.641524)
      };     
      this.production = environment.production; 
    }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(place => {
        this.place = place;
        const center = latLng(place.location.coordinates[0], place.location.coordinates[1]);
        this.updateMarkers(center.lat, center.lng);
        this.map.setView(center, 13);
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.placeService.updatePlace(this.place.id, this.place.name, this.place.description, this.place.location,
      this.place.tripHref, this.place.tripId, this.place.pictureUrl).subscribe(() => this.goBack());
  }

  onMapReady(map: Map){
    this.map = map;
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      //console.log(`Map moved to ${center.lat}, ${center.lng}`);  
      //this.addPlaceRequest.location = {'type':"Point", 'coordinates': [center.lat, center.lng]};
      //this.updateMarkers(center.lat, center.lng);
    });
  }

  onMouseEvent(ev: MouseEvent){
    const center = this.map.mouseEventToLatLng(ev);
    this.updateMarkers(center.lat, center.lng);
  }

  getGeo(): void {
    this.geo.getCurrentPosition()
      .then((position) => {
        const center = latLng(position.coords.latitude, position.coords.longitude);
        console.log(`New user location!`, position);
        this.updateMarkers(center.lat, center.lng);
        this.map.setView(center, 13);        
      })
      .catch((error) => {
        console.error('Failed to locate user because:', error);
      })
  }

  setPictureUrl(newPictureUrl: string): void {
    this.place.pictureUrl = newPictureUrl;
  }

  private updateMarkers(lat: number, lng: number): void{
    console.log('mapMarkers updated :', `coords: ${lat}, ${lng}`);
    this.mapMarkers = [marker(latLng(lat, lng), { icon: defaultIcon })
      .bindTooltip(`Coordinates: Latitude: ${lat} Longitude:${lng}`)];     
    this.place.location = {'type':"Point", 'coordinates': [lat, lng]};
    const center = latLng(lat, lng);
    this.mapOptions = {
      layers: [
        this.streetMaps
      ],
      zoom: 13,
      center: center
    };   
  }
}
