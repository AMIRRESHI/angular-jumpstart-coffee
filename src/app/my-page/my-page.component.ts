import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { DataService } from "../core/services/data.service";
import { ICustomer } from "../shared/interfaces";
import { SorterService } from "../core/services/sorter.service";
import { CoffeeService } from '../core/services/coffee.service';

@Component({
  selector: "cm-my-page",
  templateUrl: "./my-page.component.html",
  styleUrls: ["./my-page.component.css"]
})
export class MyPageComponent implements OnInit, AfterViewInit {
  customers: ICustomer[] = [];
  isActive: boolean = false;

  @ViewChild('empRef') empElementRef;

  private people: any[] = [
    { id: "1", name: "amir", age: "27" },
    { id: "2", name: "Hassan", age: "10" },
    { id: "3", name: "umer", age: "24" },
    { id: "4", name: "Khadija", age: "13" }
  ];

  private heroes = [
    { id: 1, name: "Mr. Nice", emotion: "happy" },
    { id: 2, name: "Narco", emotion: "sad" },
    { id: 3, name: "Windstorm", emotion: "confused" },
    { id: 4, name: "Magneta" }
  ];

  private numbers = [1, 2, 3];

  constructor(
    private dataService: DataService,
    private sorterService: SorterService,
    private coffeeService: CoffeeService
  ) {
   
    this.dataService.getCustomers().subscribe(customers => {
      //this.customers = customers;

      console.log('my-page', customers);
    });
  }
  

  ngAfterViewInit(){
    this.empElementRef.nativeElement.focus();
  }

  ngOnInit() {
    
    console.log(this.people);
    console.log("heroes:", this.heroes);
  }

  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
    console.log("called from comp");
  }
}
