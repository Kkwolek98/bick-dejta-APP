import { urls } from './urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key_localStorage: string = 'games';
  constructor(
    private http: HttpClient,
  ) {

  }

  addToCart(product_id: number, platform_id: number) {
    if (localStorage.getItem(this.key_localStorage) === null) {
      let products = [];
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['amount']++;
      } else {
        products.push({ 'platformId': platform_id, 'amount': 1 });
      }
      localStorage.setItem(this.key_localStorage, JSON.stringify(products));
    } else {
      let product = localStorage.getItem(this.key_localStorage);
      let products = JSON.parse(product);
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['amount']++;
      } else {
        products.push({ 'platformId': platform_id, 'amount': 1 });
      }

      localStorage.setItem(this.key_localStorage, JSON.stringify(products));

    }
  }

  getPriceTotal() {
    let products = localStorage.getItem(this.key_localStorage);
    this.http.post(urls.API + "/price-total", {
      items: products
    })
  }

  getProducts(): any[] {
    return JSON.parse(localStorage.getItem(this.key_localStorage));
  }

}
