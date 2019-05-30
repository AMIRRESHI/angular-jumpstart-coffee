
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartPageRoutingModule } from './cart-page-routing.module';
 

@NgModule({
  imports: [CartPageRoutingModule, SharedModule],
  declarations: [CartPageRoutingModule.components]
})
 

export class CartPageModule {
}

