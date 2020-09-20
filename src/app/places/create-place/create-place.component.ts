import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { AddPlaceRequest } from '../../models/add-place-request';
import { PlaceService } from '../place.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LatLng, latLng, Map, MapOptions, marker, Marker, tileLayer} from 'leaflet';
import { GeolocationService } from '../../shared/services/geolocation.service'
import { defaultIcon } from 'src/app/shared/default-marker';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit{


  addPlaceRequest: AddPlaceRequest;
  addPlaceError: Boolean;

  mapOptions: MapOptions;
  mapMarkers: Marker[];
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


  constructor(private placeService: PlaceService, 
      private router: Router, 
      private geo: GeolocationService,
      private route: ActivatedRoute, 
      private location: Location) { 
    this.addPlaceRequest = new AddPlaceRequest();
    this.addPlaceError = false;
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
  }

  ngOnInit() {
    //this.getGeo();
    const id = this.route.snapshot.paramMap.get('id');
    this.addPlaceRequest.tripId = id;
    this.getGeo();
  }

  onSumbmit(form: NgForm){
    if(form.valid){
      //hide the previous error
      this.addPlaceError = false;

      //perfomr the add place
      this.placeService.addPlace(this.addPlaceRequest).subscribe({
        next: () => this.goBack(),
        error: (err) => {
          this.addPlaceError = true;
          console.log(`Create place failed: ${err.message}`);
          alert('Create place failed');
        }, 
      });
    }
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

  goBack(): void{
    this.location.back();
  }

  private updateMarkers(latitude: number, longitude: number): void {
    console.log('mapMarkers updated :', `coords: ${latitude}, ${longitude}`);
    this.mapMarkers = [marker(latLng(latitude, longitude), { icon: defaultIcon })
      .bindTooltip(`Coordinates: Latitude: ${latitude} Longitude:${longitude}`)];     
    this.addPlaceRequest.location = {'type':"Point", 'coordinates': [latitude, longitude]};
    }
    
    setPictureUrl(newPictureUrl: string): void {
      this.addPlaceRequest.pictureUrl = newPictureUrl;
    }
}
