import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RemixPageComponent } from "./remix-page.component";

const routes: Routes = [
    { path: "", component: RemixPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemixPageRoutingModule {
  static components = [RemixPageComponent];
}
