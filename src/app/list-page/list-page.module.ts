
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListPageRoutingModule } from './list-page-routing.module';
 

@NgModule({
  imports: [ListPageRoutingModule, SharedModule],
  declarations: [ListPageRoutingModule.components]
})
 

export class ListPageModule {
}
