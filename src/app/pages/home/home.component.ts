import { Component, OnInit } from '@angular/core';

//Services
import { AuthService, IUser } from 'src/app/api/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: IUser;

  constructor(
    public authService: AuthService,
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
  }

}
