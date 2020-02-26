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
    let products = [];
    
    if (localStorage.getItem(this.key_localStorage) === null) {
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['amount']++;
      } else {
        products.push({'productId': product_id, 'platformId': platform_id, 'amount': 1 });
      }
    } else {
      products = JSON.parse(localStorage.getItem(this.key_localStorage));
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['amount']++;
      } else {
        products.push({ 'productId': product_id, 'platformId': platform_id, 'amount': 1 });
      }
    }

    localStorage.setItem(this.key_localStorage, JSON.stringify(products));
  }

  removeFromCart(platform_id: number){
    let product = localStorage.getItem(this.key_localStorage);
    let products = JSON.parse(product);
    let prod = products.find(x => x.platform_id === platform_id);
    let prodIndex = products.findIndex(x => x.platform_id === platform_id);
    if (prod) {
      products[prodIndex]['ammount']--;
      if(products[prodIndex]['ammount'] === 0){
        delete products[prodIndex];
        products = products.filter(el => el != null)
      }
    }

    localStorage.setItem(this.key_localStorage, JSON.stringify(products));
  }

  getPriceTotal() {
    let products = JSON.parse(localStorage.getItem(this.key_localStorage));
    products.forEach(e => {
        delete e.productId
    });
    
    this.http.post(urls.API + "/price-total", {
      items: JSON.stringify(products)
    })
  }

  getProducts(): any[] {
    return JSON.parse(localStorage.getItem(this.key_localStorage));
  }

}
