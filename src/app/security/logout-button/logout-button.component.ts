import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout-button',
  template: '<button (click)="logout()">Logout</button>',
})
export class LogoutButtonComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }

}
