import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/Product';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  products: any[];
  public gamesList: Product[];
  sum: number;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { 
    this.setProducts();
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }



  ngOnInit(): void {
  }

  removeFromCart(platform_id){
    this.cartService.removeFromCart(platform_id);
    this.setProducts();
  }

  setProducts(){
    this.products = this.cartService.getProducts();
    this.gamesList = [];
    this.sum = 0;
    if (this.products) {
      this.products.forEach(product =>{
        this.productService.getGameById(product.productId).subscribe(game => { 
          product.game  = game;
          product.platform = game.platforms.filter(platform => platform.id === product.platformId)[0]
          this.sum += product.platform.price;
        });
      })
    }  
  }

  onSubmit(customerData){
    this.checkoutForm.reset();
    this.cartService.getPriceTotal();
  }
}
