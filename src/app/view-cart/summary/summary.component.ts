import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() currentTab:number;
  constructor(
    private cartService:ShoppingCartService
  ) { }

  summaryData={
    cash:{
      subTotal:0,
      shipping:0,
      discount:0,
      taxes:0,
      total:0
    },
  };

  couponValue="";
  coupon = {
    error: null
  };

  ngOnInit(): void {
    this.getSummeryData();
    this.cartService.getUpdateSumary()
    .subscribe(data => {
      this.getSummeryData();
    })
  }

  getSummeryData() {
    this.summaryData = this.cartService.getSummeryData();
    // console.log("summary data: ", this.summaryData);
  }

  couponCode(event:any){
    this.couponValue = event.target.value;
    console.log("coupon code: ",this.couponValue);
    let couponDetails = this.cartService.applyCouponCode(this.couponValue);
    if (couponDetails.error) {
      this.coupon.error = couponDetails.error;
    } else {
      this.coupon.error = null;
      this.getSummeryData();
    }
  }

}
