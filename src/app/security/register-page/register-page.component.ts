import { Component, OnInit } from "@angular/core";
import { RegRequest } from "src/app/models/reg-request";
import { RegService } from "../reg.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
  regRequest: RegRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   */
  registerError: boolean;
  constructor(private reg: RegService, private router: Router) {
    this.regRequest = new RegRequest();
    this.registerError = false;    
   }

  /**
   * Called when the register form is submitted.
   */
  onRegister(form: NgForm) {
    //Only do something if the form is valid
    if (form.valid) {
      //Hide any previous register error
      this.registerError = false;
      //Perform the authenthication request to the API.
      this.reg.register(this.regRequest).subscribe({
        next: () => this.router.navigateByUrl("/"),
        error: (err) => {
          this.registerError = true;
          console.warn(`Registartion failed: ${err.message}`);
          alert(`\nRegister failed.\nThe username already exist or the passrowd is not valid!`)
        },
      })
    }
  }
}
