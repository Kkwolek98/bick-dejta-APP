import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
    private router: Router,
  ) {
    this.route.params.subscribe(params => {
      this.platform = params['platform'];
      this.platform = this.platform.toUpperCase();
      this.getGamesForPlatform();
    })
  }

  ngOnInit(): void {
  }

  getGamesForPlatform() {
    this.productService.getGamesByPlatform(this.platform).subscribe(data => {
      this.games = data;
      console.log(data)
    });
  }

  changePlatform(platform): void {
    this.router.navigate(["games/consoles/" + platform]);
  }

  getBackgroundColor(platform): string {
    console.log(platform)
    if (platform == "PS4") return 'rgba(1, 77, 199, 0.6) !important';
    if (platform == "XONE") return 'rgba(17, 125, 16, 0.6) !important'
  }
}
