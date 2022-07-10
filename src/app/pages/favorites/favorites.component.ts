import { Component, OnInit } from '@angular/core';

//Services
import { AuthService, IUser } from 'src/app/api/auth.service';
import { UserFavoriteApiService } from 'src/app/api/user-favorite-api.service';

//Icons
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public user: IUser;
  public faArrowRightFromBracket = faArrowRightFromBracket;
  public list = [];
  public type: string = 'characters';
  public offset: number = 0;
  public limit: number = 30;
  public total: number = 0;
  public loading: boolean = false;

  constructor(
    public authService: AuthService,
    public userFavoriteApiService: UserFavoriteApiService
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.getItems(this.type);
  }

  getItems(type: string) {
    if (type !== this.type) {
      this.offset = 0;
    }
    this.type = type;
    this.list = [];

    this.get();
  }

  async get() {
    this.loading = true;
    const response = await this.userFavoriteApiService.getUserFavorite(this.type, this.offset, this.limit);
    this.loading = false;

    if (response.isOk) {
      this.list = response.data.results;
      this.total = response.data.total;
    }
  }

  changePage(page: number) {
    this.offset = (page - 1);
    this.getItems(this.type);
  }

  changeLimit(limit: number) {
    this.limit = limit;
    this.getItems(this.type);
  }

  logout(): void {
    this.authService.logout();
  }

}
