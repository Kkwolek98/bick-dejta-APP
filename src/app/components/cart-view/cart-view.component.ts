import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  products: any[];
  public gamesList: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { 
    this.products = this.cartService.getProducts();
    this.gamesList = [];
    this.products.forEach(product =>{
      this.productService.getGameById(product.product_id).subscribe(game => { 
        product.game  = game;
        product.platform = game.platforms.filter(platform => platform.id === product.platform_id)[0]
      });
    })
  }

  ngOnInit(): void {
  }




}
