import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductListComponent } from './components/elements/product-list/product-list.component';
import { ProductComponent } from './components/elements/product/product.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductListComponent,
    ProductComponent,
    CartViewComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
