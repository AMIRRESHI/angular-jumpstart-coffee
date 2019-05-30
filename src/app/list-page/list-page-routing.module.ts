import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';
import { PayComponent } from '../shared/pay/pay.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule {
  static components = [ ListPageComponent ];
}
 