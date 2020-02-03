import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
