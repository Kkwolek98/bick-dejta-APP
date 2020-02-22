import { Platform } from './../../../models/Platform';
import { Product } from './../../../models/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('game') set game(val) {
    this._game = val;
  }

  @Input('platform') set platform(val) {
    this._platform = val;
  }

  public _game: Product;
  public _selectedPlatform: Platform;
  public _platform: string;
  public _price: number;

  constructor() { }

  ngOnInit(): void {
    this._selectedPlatform = this.getSelectedPlatform();
  }

  getSelectedPlatform(): Platform {
    console.log(this._game.platforms)
    return this._game.platforms.find(platform => {
      return platform.name.toUpperCase() == this._platform.toUpperCase();
    });
  }
}
