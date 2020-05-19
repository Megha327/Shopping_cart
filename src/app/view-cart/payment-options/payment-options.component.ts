import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  @ViewChild('f') signupForm:NgForm;

  payment={
    selected:"card",
    card:{
      cardno:'',
      expiry:'',
      cvv:'',
      hname:''
    },
    paypal:""
  }

  constructor(
      private router:Router,
      private shoppingCartService:ShoppingCartService
    ) {
    if (this.shoppingCartService.getCart().userData == null ) {
      router.navigateByUrl("/cart");
    }
  }

  ngOnInit(): void {
  }

  switchPayNow() {
    this.payment.card = this.signupForm.value.userData;
    console.log("payemt details: ", this.payment);
    this.shoppingCartService.addPaymentDetail(this.payment);
    this.shoppingCartService.setMessage(3);
    this.router.navigateByUrl("/orderPlaced");
  }

  switchPre(){
    this.shoppingCartService.setMessage(2);
    this.router.navigateByUrl("cart/shippingdetails");    
  }

}
