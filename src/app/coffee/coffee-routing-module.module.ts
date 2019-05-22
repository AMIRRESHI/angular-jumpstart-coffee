import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "../core/header/header.component";
import { ListPageComponent } from '../list-page/list-page.component';
import { CoffeeComponent } from './coffee.component';
import { PayComponent } from '../core/pay/pay.component';
import { CupComponent } from '../shared/cup/cup.component';
import { CartPageComponent } from '../cart-page/cart-page.component';

const routes: Routes = [
  {
    path: "",
    component: CoffeeComponent,
    children: [
      { path: "menu", component: ListPageComponent },
      
      { path: 'cart', component: CartPageComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule {
  static components = [ CoffeeComponent, HeaderComponent, ListPageComponent, PayComponent, CartPageComponent ];
}
