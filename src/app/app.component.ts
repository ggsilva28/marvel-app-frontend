import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-app';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { 
    this.initialize();
  }

  initialize(){
    const isLoggedIn = this.authService.isLogged();
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

}
