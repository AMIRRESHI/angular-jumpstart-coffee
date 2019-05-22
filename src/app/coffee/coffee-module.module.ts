
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoffeeRoutingModule } from './coffee-routing-module.module';

@NgModule({
  imports: [CoffeeRoutingModule, SharedModule],
  declarations: [CoffeeRoutingModule.components]
})
export class CoffeeModule {
}
