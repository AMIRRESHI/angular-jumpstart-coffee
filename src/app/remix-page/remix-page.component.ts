import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coffee } from '../shared/interfaces';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs/operators';
import { AddToCoffeeList, AddToCart, NextRunningNo } from '../actions/app.actions';

@Component({
  selector: 'cm-remix-page',
  templateUrl: './remix-page.component.html',
  styleUrls: ['./remix-page.component.css']
})
export class RemixPageComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();

  ingredients = [
    'chocolate syrup',
    'espresso',
    'milk foam',
    'steamed milk',
    'whipped cream',
    'water'
  ];

  coffee: Coffee;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) { }

  ngOnInit() {
    const { template = '' } = this.route.snapshot.queryParams;

    this.store.select(x => ({
      template: x.app.coffeeList.find(c => c.name === template),
      runningNo: x.remix.runningNo
    }))
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(x => {
        // get template recipe if any
        const templateRecipe = x.template ? x.template.recipe : [];

        // merge template recipe with default recipe
        const recipe = this.ingredients.map(ing => {
          const item = templateRecipe.find(r => r.name === ing) || { name: ing, quantity: 0 };
          return { ...item };
        });

        this.coffee = {
          name: 'Special Cafe ' + x.runningNo.toString().padStart(2, '0'),
          price: 20,
          recipe
        };
      });
  }

  addToCart(coffee: any) {
    // actions
    this.store.dispatch(new AddToCoffeeList([coffee]));
    this.store.dispatch(new AddToCart(coffee.name));
    this.store.dispatch(new NextRunningNo());
    // route
    this.router.navigateByUrl('/cart');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
