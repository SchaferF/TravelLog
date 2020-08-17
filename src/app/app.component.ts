import { Component } from '@angular/core';
import { User } from '../app/models/user';
import { AuthService } from '../app/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  title = 'travel-log';
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user => this.user = user);
  }
}
