import { Component, OnInit } from '@angular/core';
import { UserService } from "../api/services/user.service";

@Component({
  selector: 'app-dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.css']
})
export class DummyPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //Ask the service to make an API call on component initialization
    this.userService.loadAllUsers().subscribe({
      next: (users) => console.log("Users", users),
      error: (error) => console.warn("Error", error),
    });
  }

}
