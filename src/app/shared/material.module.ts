import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatRippleModule,
  ]
})
export class MaterialModule { }
