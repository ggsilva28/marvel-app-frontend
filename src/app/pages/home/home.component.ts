import { Component, OnInit } from '@angular/core';

//Services
import { AuthService, IUser } from 'src/app/api/auth.service';
import { MarvelApiService } from 'src/app/api/marvel-api.service';

//Icons
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    public marvelApiService: MarvelApiService
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.getItems(this.type);
  }

  getItems(type: string) {
    if(type !== this.type) {
      this.offset = 0;
    }
    this.type = type;
    this.list = [];

    if (type === 'characters') {
      this.getCharacters();
    } else {
      this.getComics();
    }
  }

  async getCharacters() {
    this.loading = true;
    const response = await this.marvelApiService.getCharacters(this.offset, this.limit);
    this.loading = false;

    if (response.isOk) {
      this.list = response.data.results;
      this.total = response.data.total;
    }
  }

  async getComics() {
    this.loading = true;
    const response = await this.marvelApiService.getComics(this.offset, this.limit);
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
