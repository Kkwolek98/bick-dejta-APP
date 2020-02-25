import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:number;
  game: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
    ) { 
      this.route.params.subscribe(params =>{
        this.id = params['id'];
        this.getGame();
      })
  }

  ngOnInit(): void {
  
  }

  getGame(){
      this.productService.getGameById(this.id).subscribe(data =>{
        this.game = data;
      });
  }

  addToCart(platform_id: number){
    this.cartService.addToCart(this.id, platform_id);
  }

}
