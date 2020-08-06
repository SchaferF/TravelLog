import { Component } from '@angular/core';
import { DelPlaceService } from '../del-place.service';

@Component({
  selector: 'app-delete-place',
  template:'<button (click)="delete()">Delete</button>'
})
export class DeletePlaceComponent {

  deletePlaceError: boolean;

  constructor(private del: DelPlaceService) { 
    this.deletePlaceError = false;
  }

  delete(): void {
    this.del.delete('');
  }

}
