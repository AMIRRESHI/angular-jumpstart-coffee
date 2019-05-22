import { Injectable } from "@angular/core";
import { ICoffee, IApiResponse, ICoffeeApp } from "../../shared/interfaces";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CoffeeService {
  coffeeBaseUrl = "http://localhost:3001/coffee";

  constructor(private http: HttpClient) {}

  // getAll() {
  //   return this.http.get<Coffee[]>('assets/list.json').pipe(
  //     delay(1000)
  //   );
  // }

  // getList() {
  //   return this.getAll().toPromise();
  // }

  // getCoffeeList(): Observable<ICoffee[]> {
  //   return this.http.get<ICoffee[]>(this.coffeeBaseUrl).pipe(
  //     map(coffeeList => {
  //       // this.calculateCustomersOrderTotal(customers);
  //       return coffeeList;
  //     })
  //     // catchError(this.handleError)
  //   );
  // }

  getCoffeeList(): Observable<ICoffeeApp[]> {
    return this.http.get<ICoffeeApp[]>(this.coffeeBaseUrl).pipe(
      map(c => {
        // this.calculateCustomersOrderTotal(customers);
        // console.log('inside service:', c);
        return c;
      })
      // catchError(this.handleError)
    );
  }

  getCoffee(id: number): Observable<ICoffeeApp> {
    return this.http.get<ICoffeeApp>(this.coffeeBaseUrl + "/" + id).pipe(
      map(coffee => {
        // this.calculateCustomersOrderTotal([customer]);
        return coffee;
      })
      // catchError(this.handleError)
    );
  }

  // insertCoffee(coffee: ICoffee): Observable<ICoffee> {
  //   return this.http.post<ICoffee>(this.coffeeBaseUrl, coffee)
  //       // .pipe(catchError(this.handleError));
  // }

  addToCart(name: string): Observable<ICoffee> {
    //alert("inside coffe service addToCart");
    return this.http.post<ICoffee>(this.coffeeBaseUrl, name);
    // .pipe(catchError(this.handleError));
  }

  emptyCart(): Observable<ICoffee[]> {
    return of([]);
  }

  updateCustomer(coffee: ICoffee): Observable<boolean> {
    return this.http
      .put<IApiResponse>(this.coffeeBaseUrl + "/" + coffee, coffee)
      .pipe(
        map(res => res.status)
        // catchError(this.handleError)
      );
  }

  deleteCustomer(id: number): Observable<boolean> {
    return this.http.delete<IApiResponse>(this.coffeeBaseUrl + "/" + id).pipe(
      map(res => res.status)
      // catchError(this.handleError)
    );
  }
}
