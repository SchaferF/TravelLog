import { Component, OnInit } from '@angular/core';
import { AddTripRequest } from "../../models/add-trip-request";
import { TripService } from "../trip.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {

  addTripRequest: AddTripRequest;

  addTripError: Boolean;

  constructor(private tripService: TripService, private router: Router) { 
    this.addTripRequest = new AddTripRequest();
    this.addTripError = false;
  }

  onSubmit(form: NgForm){
    if(form.valid){
      //Hide previous error
      this.addTripError = false;

      //Perform the add trip 
      this.tripService.addTrip(this.addTripRequest).subscribe({
        next: () => this.router.navigateByUrl("/trips"),
        error: (err) => {
          this.addTripError = true;
          console.log(`Create trip failed: ${err.message}`);
          alert(`Create trip failed`);
        },
      });
    }
  }
}
