import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//Services
import { UserFavoriteApiService } from 'src/app/api/user-favorite-api.service';
import { ToastrService } from 'ngx-toastr';

//Icons
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any;
  @Input() type: string = '';

  @Output() onToggleFavorite = new EventEmitter<any>();

  public faStar = faStar;
  public faStarOutline = faStarOutline;

  public loading: boolean = false;

  constructor(
    private userFavoriteAPI: UserFavoriteApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  openDetails() {
    window.open(this.item.link, '_blank');
  }

  toggleFavorite(e: any) {
    e.stopPropagation();

    if (this.item.isFavorite && this.item.userFavoriteId) {
      this.unfavoriteItem();
    }
    else {
      this.favoriteItem();
    }
  }

  async favoriteItem() {
    this.loading = true;
    const response = await this.userFavoriteAPI.addUserFavorite(this.type, this.item);
    this.loading = false;

    if (response.isOk) {
      this.item = response.data;
      this.toastr.success('Item adicionado aos favoritos!');
    } else {
      this.toastr.error('Erro ao adicionar item aos favoritos!');
    }

    this.onToggleFavorite.emit();
  }

  async unfavoriteItem() {
    this.loading = true;
    const response = await this.userFavoriteAPI.deleteUserFavorite(this.item.userFavoriteId);
    this.loading = false;

    if (response.isOk) {
      this.item.isFavorite = false;
      this.toastr.success('Item removido dos favoritos!');
    } else {
      this.toastr.error('Erro ao remover item dos favoritos!');
    }

    this.onToggleFavorite.emit();
  }
}

