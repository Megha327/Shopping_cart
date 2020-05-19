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
  voucherValue="";
  voucherError={
    error:null
  }
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
    // console.log("coupon code: ",this.couponValue);
    let couponDetails = this.cartService.applyCouponCode(this.couponValue);
    if(this.couponValue == ''){
      this.coupon.error = null;
    }
    else if (couponDetails.error) {
      this.coupon.error = couponDetails.error;
    } else {
      this.coupon.error = null;
      this.getSummeryData();
    }
  }

  voucher(event:any){
    this.voucherValue = event.target.value;
    // console.log("voucher code: ",this.voucherValue);
    let voucherDetails = this.cartService.applyVoucher(this.voucherValue);
    if(this.voucherValue == ''){
      this.voucherError.error = null;
    }
    else if (voucherDetails.error) {
      this.voucherError.error = voucherDetails.error;
    } else {
      this.voucherError.error = null;
      this.getSummeryData();
      // console.log("voucher summary: ", this.getSummeryData());
    }
  }

}
