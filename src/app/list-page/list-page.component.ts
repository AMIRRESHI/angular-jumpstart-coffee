import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Router } from '@angular/router';
import { AppState } from '../state/app.state';
import { environment } from '../../environments/environment';
import { GetCoffeeList, AddToCart } from '../actions/app.actions';
import { App } from '../shared/interfaces';



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  // @Select((state: App) => state.app.coffeeList)
  @Select(AppState.coffeeList)
  list$;

  isFeatureRemixOn = environment.features.remix;

  constructor(private router: Router, private store: Store) { 
    this.list$.subscribe(
      x => console.log('amir' , x )
    )
  }

  ngOnInit() {
    const isListPopulated = this.store.selectSnapshot<App>(x => x.app.coffeeList.length);
    if (isListPopulated) { return; }
    this.store.dispatch(new GetCoffeeList());

    // this.store.selectOnce(x => x.app.coffeeList.length)
    //   .subscribe(x => {
    //     if (x) { return; }
    //     this.store.dispatch(new GetCoffeeList());
    //   });

  }

  addToCart(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }
}
