import { Component } from '@angular/core';
import { User } from '../app/models/user';
import { AuthService } from '../app/security/auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  title = 'travel-log';
  production: boolean;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user => this.user = user);
    this.production = environment.production;
  }
}
