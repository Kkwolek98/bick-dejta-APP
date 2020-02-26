import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key_localStorage: string = 'games';
  constructor() {

  }

  addToCart(product_id: number, platform_id: number) {
    let products = [];
    
    if (localStorage.getItem(this.key_localStorage) === null) {
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['ammount']++;
      } else {
        products.push({'product_id': product_id, 'platform_id': platform_id, 'ammount': 1 });
      }
    } else {
      products = JSON.parse(localStorage.getItem(this.key_localStorage));
      let prod = products.find(x => x.platform_id === platform_id);
      let prodIndex = products.findIndex(x => x.platform_id === platform_id);
      if (prod) {
        products[prodIndex]['ammount']++;
      } else {
        products.push({ 'product_id': product_id, 'platform_id': platform_id, 'ammount': 1 });
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


  getProducts(): any[] {
    return JSON.parse(localStorage.getItem(this.key_localStorage));
  }

}
