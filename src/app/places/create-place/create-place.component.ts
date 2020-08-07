import { Component, OnInit } from '@angular/core';
import { AddPlaceRequest } from '../../models/add-place-request';
import { AddPlaceService } from '../add-place.service';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { latLng, Map, MapOptions, tileLayer} from 'leaflet';
import { GeolocationService } from '../../shared/services/geolocation.service'
import { Position } from 'geojson';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit{

  mapOptions: MapOptions;

  addPlaceRequest: AddPlaceRequest;

  addPlaceError: Boolean;

  currentPosition: Coordinates;

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


  constructor(private place: AddPlaceService, private router: Router, private geo: GeolocationService) { 
    this.addPlaceRequest = new AddPlaceRequest();
    this.addPlaceError = false;
    this.geo.getCurrentPosition()
    .then((position) => {
      this.currentPosition = position.coords
    })
    .catch((err) => {
      console.warn('Failed to locate user because', err);
    });
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
    this.getGeo();
  }

  onSumbmit(form: NgForm){
    if(form.valid){
      //hide the previous error
      this.addPlaceError = false;

      //perfomr the add place
      this.place.addPlace(this.addPlaceRequest).subscribe({
        next: () => this.router.navigateByUrl("/"),
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
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    })
  }

  getGeo(): void {
    this.geo.watchPosition().subscribe({
      next: (position) => {
        this.currentPosition = position.coords;
        console.log(`New user location!`, position);
        this.mapOptions = {
          layers: [ this.streetMaps ],
          zoom: 13,
          center: latLng(position.coords.latitude, position.coords.longitude)
        };
      },
      error: (error) => {
        console.log('Failed to locate user because', error);
      },      
    });
  }

}
