import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

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
  }

  refreshCart() {
    this.cartDetails = this.shoppingCartService.getCartDetails();
    this.cartDetails.forEach(product => {
      if (product.model_id == null) {
        product.model_id = product.product_models[0].model_id;
      }
    });
    // console.log("shopping cart cart details: ", this.cartDetails);
  }

  removeFromCart(id:number) {
    this.shoppingCartService.removeFromCart(id);
    this.refreshCart();
  }


  switch() {
    this.shoppingCartService.setMessage(1);
    // this.currentTab = index;
    // console.log(this.currentTab);
    this.router.navigateByUrl("cart/shippingdetails");
  }

  onChangeModel(cartProduct){
    this.setCartDetails();
    cartProduct.thumbnail = cartProduct.product_models
        .filter(pm => pm.model_id == cartProduct.model_id)[0].images[0];
  }

  onChangeQuantity(){
    this.setCartDetails();
  }

  setCartDetails() {
    this.shoppingCartService.setCartDetails(this.cartDetails);
  }  
}
