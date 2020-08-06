import { Component, OnInit } from '@angular/core';
import { DelTripService } from '../del-trip.service';

@Component({
  selector: 'app-delete-trip',
  template: '<button (click)="delete()">Delete</button>'
})
export class DeleteTripComponent {

  deleteError: boolean;

  constructor(private del: DelTripService) {
    this.deleteError = false;
   }

  delete(): void {
    this.del.delete('');
  }

}
