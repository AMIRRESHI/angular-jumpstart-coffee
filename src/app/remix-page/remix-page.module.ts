
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RemixPageRoutingModule } from './remix-page-routing.module';
 

@NgModule({
  imports: [ RemixPageRoutingModule, SharedModule],
  declarations: [RemixPageRoutingModule.components]
})
 

export class RemixPageModule {
}
