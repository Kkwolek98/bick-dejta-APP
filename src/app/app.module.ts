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
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ChipAutocompleteComponent } from './components/elements/chip-autocomplete/chip-autocomplete.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductListComponent,
    ProductComponent,
    CartViewComponent,
    SummaryComponent,
    ContactComponent,
    AboutComponent,
    AdminPanelComponent,
    ProductDetailsComponent,
    ChipAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
