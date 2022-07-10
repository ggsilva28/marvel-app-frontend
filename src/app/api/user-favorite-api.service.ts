import { Injectable } from '@angular/core';

//Services
import { RequestService } from '../services/request.service';

export interface IUserFavorite {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  isFavorite?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserFavoriteApiService {

  constructor(
    private requestService: RequestService
  ) { }

  public getUserFavorite(type: string, offset: number = 0, limit: number = 30) {
    return this.requestService.get(`/user-favorites/get?type=${type}&offset=${offset}&limit=${limit}`);
  }

  public addUserFavorite(type: string, data: IUserFavorite) {
    return this.requestService.post(`/user-favorites/add`, { type, data });
  }

  public deleteUserFavorite(id: number) {
    return this.requestService.delete(`/user-favorites/remove/${id}`);
  }
}
