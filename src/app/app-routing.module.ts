import { ProductListComponent } from './components/elements/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'game/:id', component: ProductDetailsComponent },
  { path: 'games/:platform', component: ProductListComponent },
  { path: 'games/consoles/:platform', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
