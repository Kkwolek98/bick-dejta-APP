import { Platform } from './../../models/Platform';
import { Category } from './../../models/Category';
import { ProductService } from './../../services/product.service';
import { AdminUtilityService } from './../../services/admin-utility.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminUtils: AdminUtilityService,
    private productService: ProductService,
  ) {
    this.form = this.fb.group({
      name: new FormControl(''),
      description: new FormControl(''),
      imgUrl: new FormControl(''),
      price: new FormControl(''),
      platform: new FormControl(''),
      category: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    const product = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      imgUrl: this.form.get('imgUrl').value,
    }
    const platform: Platform = {
      price: this.form.get('price').value,
      name: this.form.get('platform').value,
    }
    const category = this.form.get('category').value

    const productVm = {
      product: product,
      platforms: [platform],
      categories: [new Category(category)]
    }
    this.adminUtils.addNewProduct(productVm).subscribe(
      data => {
        console.log(data)
      })
  }

}
