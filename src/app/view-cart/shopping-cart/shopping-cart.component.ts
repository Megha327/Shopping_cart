import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartDetails;

  constructor(
    private router:Router,
    private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.refreshCart();
    console.log("cart-details: ", this.cartDetails);
  }

  refreshCart() {
    this.cartDetails = this.shoppingCartService.getCartDetails();
    this.cartDetails.forEach(product => {
      if (product.model_id == null) {
        product.model_id = product.product_models[0].model_id;
      }
    });
    console.log("shopping cart cart details: ", this.cartDetails);
  }

  removeFromCart(index:number) {
    this.cartDetails.splice(index, 1);
    this.setCartDetails();
  }


  switch() {
    this.shoppingCartService.setMessage(1);
    this.router.navigateByUrl("cart/shippingdetails");
  }

  onChangeModel(i:number){
    this.setCartDetails();
    this.cartDetails[i].thumbnail = this.cartDetails[i].product_models
        .filter(pm => pm.model_id == this.cartDetails[i].model_id)[0].images[0];
  }

  onChangeQuantity(){
    this.setCartDetails();
  }

  setCartDetails() {
    this.shoppingCartService.setCartDetails(this.cartDetails);
  }  

  maxValueOfPcs(index:number){
    if(this.cartDetails[index].quantity < 10){
      this.cartDetails[index].quantity++;
      this.onChangeQuantity();
    }
  }

  minValueOfPcs(index:number){
    if(this.cartDetails[index].quantity > 1){
      this.cartDetails[index].quantity--;
      this.onChangeQuantity();
    }
  }
}
