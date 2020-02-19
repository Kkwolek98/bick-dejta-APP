import { Platform } from './../models/Platform';
import { Product } from './../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from './urls';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllGames(): Observable<Product[]> {
    return this.http.get<Product[]>(urls.API + "/games");
  }

  getGameById(id: number): Observable<Product> {
    return this.http.get<Product>(urls.API + "/game/" + id);
  }

  getGamesByPlatform(platform: string): Observable<Product[]> {
    return this.http.get<Product[]>(urls.API + "/games/platform/" + platform);
  }

  addGame(game: Product) {
    return this.http.post(urls.API + "/game/add", game);
  }

  addCategoryToGame(id: number, category: string) {
    return this.http.post(urls.API + "/game/" + id + "/add-category", category);
  }

  addPlatformToGame(id: number, platform: Platform) {
    return this.http.post(urls.API + "/game/" + id + "/add-platform", platform);
  }
}
