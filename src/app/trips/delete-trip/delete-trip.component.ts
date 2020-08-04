import { Component, OnInit } from '@angular/core';
import { DelTripService } from '../del-trip.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-trip',
  template: '<button (click)="delete()">Delete</button>'
})
export class DeleteTripComponent {

  deleteError: boolean;

  constructor(private del: DelTripService, private router: Router) {
    this.deleteError = false;
   }

  delete(): void {
    
  }

}
