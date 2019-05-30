import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  { path: 'menu', loadChildren: 'app/list-page/list-page.module#ListPageModule' },
  { path: 'cart', loadChildren: 'app/cart-page/cart-page.module#CartPageModule' },
  { path: 'remix', loadChildren: 'app/remix-page/remix-page.module#RemixPageModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/menu'} // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
