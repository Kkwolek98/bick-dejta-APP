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
  ) {
    this.form = this.fb.group({
      name: new FormControl(''),
      description: new FormControl(''),
      imgUrl: new FormControl(''),
      price: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    const product = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      imgUrl: this.form.get('imgUrl').value,
      price: this.form.get('price').value,
    }

    this.adminUtils.addNewProduct(product).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
