import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public platform: string;
  public games: Product[]

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.platform = params['platform'];
      this.platform = this.platform.toUpperCase();
    })
  }

  ngOnInit(): void {
    this.productService.getGamesByPlatform(this.platform).subscribe(data => {
      this.games = data;
      console.log(data)
    });
  }

}
