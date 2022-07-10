import { Injectable } from '@angular/core';

//Services
import { RequestService } from '../services/request.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(
    private request: RequestService,
  ) { }

  getCharacters(offset: number = 0, limit: number = 30) {
    return this.request.get(`/marvel/characters?offset=${offset}&limit=${limit}`);
  }
  
  getComics(offset: number = 0, limit: number = 30) {
    return this.request.get(`/marvel/comics?offset=${offset}&limit=${limit}`);
  }
}
