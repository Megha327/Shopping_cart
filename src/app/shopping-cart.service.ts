import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiServiceService } from './Api-service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
      private apiService:ApiServiceService
    ) { 
      this.updateSummary.next(0);
    }

  cart = {
    selectedProducts:[],
    selectedProductDetails: [],
    userData:null,
    paymentDetail:null,
    coupon:null,
    totalCount: new Subject<number>()
  }

  public updateSummary = new Subject<number>();

  public cartValue = new Subject<number>(); 
  
  // Used from "/cart" page
  setMessage(value: number) {
    this.cartValue.next(value); 
    //it is publishing this value to all the subscribers that have already subscribed to this message
  }

  getMessage(){
    return this.cartValue;
  }

  updateSumaryFlag() {
    this.updateSummary.next(Math.random()*1000);
  }

  getUpdateSumary() {
    return this.updateSummary;
  }

  // Used from dashboard and product page
  addProductToCartWithModel(id:number, model:number) {
    let cartProduct = {
      id: id,
      model: model,
      quantity: 1
    };
    this.cart.selectedProducts.push(cartProduct);
    this.storeDataToLocalStorage();
    this.cart.totalCount.next(this.cart.selectedProducts.length);
  }

  addProductToCart(id:number){
    this.addProductToCartWithModel(id,null);
  }

  storeDataToLocalStorage() {
    window.localStorage.setItem("cartProducts", JSON.stringify(this.cart.selectedProducts));
    if (this.cart.userData != null) {
      window.localStorage.setItem("userData", JSON.stringify(this.cart.userData));
    }
  }

  refreshDataFromLocalStorage() {
    let selectedProductsStr = window.localStorage.getItem("cartProducts");
    if (selectedProductsStr) { 
      this.cart.selectedProducts = JSON.parse(selectedProductsStr);
      this.cart.totalCount.next(this.cart.selectedProducts.length);
    }
    let userData = window.localStorage.getItem("userData");
    if (userData) {
      this.cart.userData = JSON.parse(userData);
    }
  }

  clearLocalStorage() {
    window.localStorage.removeItem("cartProducts");
    //window.localStorage.removeItem("userData"); // No need to remove for the sme user.
  }

  getProductCount() {
    return this.cart.totalCount;
  }

  getSelectedProductDetails(productId:number){
    this.apiService.getProductById(productId);
  }

  getCartDetails() {
    let ids:number[] = this.cart.selectedProducts.map(sp => sp.id);
    this.cart.selectedProductDetails = this.apiService.getProductByIds(ids);
    for (let i=0; i< this.cart.selectedProductDetails.length; i++) {
      let sp = this.cart.selectedProducts.filter( p => p.id == this.cart.selectedProductDetails[i].id)[0];
      this.cart.selectedProductDetails[i].model_id = sp.model;
      this.cart.selectedProductDetails[i].quantity = sp.quantity;
    }
    return this.cart.selectedProductDetails;
  }

  setCartDetails(selectedProductDetails) {
    for (let i=0; i < selectedProductDetails.length; i++) {
      let sp = this.cart.selectedProducts.filter( p => p.id == this.cart.selectedProductDetails[i].id)[0];
      sp.quantity = selectedProductDetails[i].quantity;
      sp.model = Number.parseInt(selectedProductDetails[i].model_id);
    }
    this.cart.selectedProductDetails = selectedProductDetails;
    this.storeDataToLocalStorage();
    this.updateSumaryFlag();
  }

  applyCouponCode(code:string) {
    let couponDetails = this.apiService.getCouponByCode(code);
    let coupon = {
      error: null,
      success: null
    };
    console.log("couponDetails - ", couponDetails);
    if (couponDetails['error'] != null) {
      coupon.error = couponDetails['error'];
    } else {
      if (this.getSummeryData().cash.total >= couponDetails['min']) {
        this.cart.coupon = couponDetails;
        coupon.success = true;
      } else {
        coupon.error = "Coupon is not valid for this amount.";
      }
    }
    return coupon;
  }

  getSummeryData() {
    let cash = {
      subTotal:0,
      shipping:0,
      discount:0,
      taxes:0,
      total:0
    }
    this.cart.selectedProducts.forEach(sp => {
      let price:number = this.cart.selectedProductDetails.filter(spd => sp.id == spd.id)[0].price;
      cash.subTotal += price * sp.quantity;
      // console.log("pid: " + sp.id + "for :" + cash.subTotal + " += " + price + "  * " + sp.quantity)
    });
    if (this.cart.coupon != null) {
      cash.discount = this.cart.coupon.discount;
    }
    cash.taxes = (cash.subTotal * 5) / 100;
    cash.total = cash.subTotal + cash.shipping + cash.taxes - cash.discount;
    return {
      cash: cash,
      cartDetails: this.cart.selectedProductDetails,
    }
  }

  removeFromCart(id:number) {
    this.cart.selectedProducts = this.cart.selectedProducts.filter(sp => sp.id != id);
    this.storeDataToLocalStorage();
    this.updateSumaryFlag();
  }

  getUserData() {
    return this.cart.userData;
  }

  //aad user data from shipping details
  addUserData(userData:any){
    this.cart.userData = userData;
    this.storeDataToLocalStorage();
    console.log("user data from cart service: ", this.cart.userData);
  }

  //aad payment detail from payment options cart
  addPaymentDetail(paymentDetail:any){
    this.cart.paymentDetail = paymentDetail;
    console.log("payment detail from cart service: ", this.cart.paymentDetail);
  }

  //placeOrder get from orderPlced
  placeOrder(paymentInfo:{}){
    let order = {
      products: this.cart.selectedProductDetails,
      userData: this.cart.userData,
      paymentDetail: this.cart.paymentDetail
    }
    order.paymentDetail.paymentInfo = paymentInfo;
    this.clearCartAfterOrderPlaced();
    // http.post("create order url", order)
    console.log(order);
  }

  private clearCartAfterOrderPlaced() {
    this.clearLocalStorage();
    this.cart.selectedProducts = [];
    this.cart.selectedProductDetails = [];
    this.cart.paymentDetail = {}
    this.cart.totalCount.next(0);

  }

  getCart() {
    return this.cart;
  }
}
