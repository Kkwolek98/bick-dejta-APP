import { Product } from './../models/Product';
import { urls } from './urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUtilityService {

  constructor(
    private http: HttpClient,
  ) { }

  public addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(urls.API + '/game/add', product);
  }
}
