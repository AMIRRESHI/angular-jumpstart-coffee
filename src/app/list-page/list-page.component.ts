import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../core/services/coffee.service';
import { Observable } from 'rxjs';
import { ICoffee, ICoffeeApp } from '../shared/interfaces';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'cm-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list$: Observable<ICoffeeApp[]>;
  isFeatureRemixOn = environment.features.remix;

  constructor(private coffeeService: CoffeeService, private router: Router) {
    this.list$ = this.coffeeService.getCoffeeList();
    
    this.coffeeService.getCoffeeList().subscribe(coffee => {

      console.log('ListPageComponent: ', coffee) 
    });
  }

  ngOnInit() {
  }

  addToCart(name: string) {
    this.coffeeService.addToCart(name);
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }

}
