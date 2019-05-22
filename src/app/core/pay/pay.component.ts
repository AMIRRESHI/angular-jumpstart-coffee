import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CoffeeService } from "../services/coffee.service";
import { ICoffeeApp, ICoffee } from "../../shared/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "cm-pay",
  templateUrl: "./pay.component.html",
  styleUrls: ["./pay.component.css"]
})
export class PayComponent implements OnInit {
  total$: any;
  iCoffeeData: ICoffee[];
  coffeeList$;
  cart$;

  

  constructor(private router: Router, private coffeeService: CoffeeService) {
    //this.total$ = this.totalCartAmount(this.iCoffeeApp);

    // this.coffeeService.getCoffeeList().subscribe( x => {
    //   console.log('PayComponent : ', x.find( x => x.price > 7) );
    // })

    this.total$ = this.coffeeService.getCoffeeList().subscribe(res => {
      // this.iCoffeeData = res;
      // console.log('amy: ', this.iCoffeeData )
      // this.getAppInitialState().coffeeList = this.iCoffeeData;
      // this.addToCoffeeList();

      this.coffeeList$ =  res.map(x => x.cart);
      this.cart$ =  res.map(x => x.cart);

      

      //console.log('umeeee: ', this.getAppInitialState(), this.iCoffeeData)
      //this.totalCartAmount(this.getAppInitialState());
    });
  }
 
  ngOnInit() {}

  totalCartAmount(state: ICoffeeApp) {
    console.log("totalCartAmount state: ", state);
    const priceList = state.cart.map(c => {
      const unitPrice = state.coffeeList.find(x => x.name === c.name).price;
      return unitPrice * c.quantity;
    });
    const sum = priceList.reduce((acc, curr) => acc + curr, 0);

    return sum;
  }

  totalCartQuantity(state: ICoffeeApp) {
    const total = state.cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return total;
  }

  pay() {
    alert("Yay, order placed. Start a new order!");
    //this.store.dispatch(new EmptyCart());
    this.coffeeService.emptyCart();
    this.router.navigateByUrl("/menu");
  }
}
