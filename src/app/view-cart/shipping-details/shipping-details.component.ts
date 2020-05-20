import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {

  defaultCountry="india";


  defaultShipping:{}[] = [
    {
      value: "free",
      text1:"Free Shipping",
      text2:"Between 2-5 working days"
    },
    {
      value:"fast",
      text1:"Next Day Delivery-$20",
      text2:"24 hours from checkout"
    }
  ]

  @ViewChild('f') signupForm:NgForm;

  user = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '', 
    city:'',
    country:'',
    zipCode:'',
    phone:'',
    shipping:'free'
  };
  
  constructor(private router:Router,
    private shoppingCartService:ShoppingCartService) {
      let userData = this.shoppingCartService.getUserData();
      if (userData != null) {
        this.user = userData;
      }
     }

  ngOnInit(): void {
    
  }

  switchNext() {
    this.user = this.signupForm.value.userData;
 
    this.shoppingCartService.addUserData(this.user);
    this.shoppingCartService.setMessage(2);
    this.router.navigateByUrl("cart/paymentoptions");
  }

  switchPre(){
    this.shoppingCartService.setMessage(0);
    this.router.navigateByUrl("cart/shoppingcart");    
  }

  reset(){
    this.signupForm.reset();
  }

  addShipping(value:string){
    this.shoppingCartService.addShipping(value);
  }

}