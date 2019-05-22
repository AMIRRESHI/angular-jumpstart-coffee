import { Component, OnInit } from "@angular/core";
import { CoffeeService } from "../services/coffee.service";
import { ICoffee } from "../../shared/interfaces";
import { Router } from '@angular/router';

@Component({
  selector: "cm-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  coffee: ICoffee[] = [];

  constructor(private coffeeService: CoffeeService, private router: Router) {
    
    this.coffeeService.getCoffeeList().subscribe(coffee => {
      // this.coffee = coffee;

      console.log("test coffee: ", coffee);
    });

    this.router.navigate(['/coffee/menu']);
  }

//   totalCartQuantity(state: App) {
//     const total = state.cart
//         .reduce((acc, curr) => acc + curr.quantity, 0);

//     return total;
// }

  ngOnInit() {
    

    
  }
}
