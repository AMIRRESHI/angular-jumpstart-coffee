import { Component, OnInit } from "@angular/core";

import { Select, Store } from '@ngxs/store';
import { AppState } from '../../state/app.state';
import { environment } from '../../../environments/environment';

@Component({
  selector: "cm-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Select(AppState.totalCartQuantity)
  cartCount$;
  // cartCount$ = this.store.select(x => x.app.cart.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0));
  isFeatureRemixOn = environment.features.remix;

  constructor(private store: Store) { }

  ngOnInit() {
  }
}

