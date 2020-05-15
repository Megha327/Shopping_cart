import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit, OnChanges {

  cartProcess=["1. Shopping Cart","2. Shipping Details","3. Payment Options"];
  cartProcessRoute=['shoppingcart', 'shippingdetails', 'paymentoptions']
  
  currentTab:number = 0;

  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentTab = 0
    console.log("OnInit called.")
  }
  ngOnChanges(){
    // this.switch(0);
    // this.currentTab = 0;
    console.log("NgOnChanges called.")
  }

  switch(index:number) {
    this.currentTab = index;
    console.log(this.currentTab);
    this.router.navigateByUrl("cart/"+ this.cartProcessRoute[index]);
  }
}
