import { Component, OnInit } from '@angular/core';
import { DelAuthRequest } from 'src/app/models/del-auth-request';
import { DelService } from '../del.service';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-delete-button',
  template: '<button (click)="delete()">Delete</button>',
})
export class DeleteButtonComponent {

 /**
  * 
  */
 deleteRequest: DelAuthRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the id is incorrect).
   */
  deleteError: boolean;

  constructor(private del: DelService, private auth: AuthService) {
    this.deleteRequest = new DelAuthRequest();
    this.deleteError = false;
   }

   delete(): void {
     if (this.auth.isAuthenticated) {
      this.auth.getUser().forEach((user) => this.deleteRequest.id = user.id);
      console.log(this.deleteRequest.id);
      this.del.delete(this.deleteRequest);
      //this.router.navigateByUrl("/login");
     }
     
   }

}
