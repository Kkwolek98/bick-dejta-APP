import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key_localStorage: string = 'games';
  constructor() {

   }

  addToCart(product_id: number, platform_id: number){
    if(localStorage.getItem(this.key_localStorage) === null){
      let products = [];
      products.push({'product_id': product_id,'platform_id': platform_id});
      localStorage.setItem(this.key_localStorage,JSON.stringify(products));
    }else{
      let product = localStorage.getItem(this.key_localStorage);
      let products = JSON.parse(product);
      products.push({'product_id': product_id,'platform_id': platform_id});
      localStorage.setItem(this.key_localStorage,JSON.stringify(products)); 
    }
  }

  getProducts():any[]{
    return JSON.parse(localStorage.getItem(this.key_localStorage));
  }

}
