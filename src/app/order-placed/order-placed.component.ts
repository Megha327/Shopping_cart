import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  isRedirecting = true;
  isOrderPlaced = false;

  constructor(private router:Router,
    private cartService:ShoppingCartService) { 
      if (this.cartService.getCart().paymentDetail == null ) {
        router.navigateByUrl("/cart");
      }
    }

  ngOnInit(): void {
    setTimeout(d => {
      this.isRedirecting = false;
      setTimeout(d => {
        this.isOrderPlaced = true;
        this.setPaymentInfo();
      },2000);
    },5000);
  }

  setPaymentInfo(){
    let paymentInfo = {
      "paymentId": "XYZ"
    };
    this.cartService.placeOrder(paymentInfo);
  }

}
