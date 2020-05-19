import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { shoppingCartValues } from './cart.constant';
import { filter, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
  cartProcess = shoppingCartValues;
  currentTab:number = 0;  
  cartDetails;

  constructor(
      public router: Router, private route: ActivatedRoute, 
      private shoppingCartService:ShoppingCartService
    ) {

      // console.log("constructor called");
      // this.currentTab = 0;
      
      this.router.events
         .pipe(filter(e => e instanceof NavigationEnd))
         .subscribe((e: NavigationEnd) => {
          // console.log(e);
          switch(e.urlAfterRedirects) {
            case "/cart/shippingdetails":
              this.shoppingCartService.setMessage(1);
              break;
            case "/cart/paymentoptions":
              this.shoppingCartService.setMessage(2);
              break;
            
          }
         });
      
      this.shoppingCartService.getMessage()
      .subscribe(data => {
        // console.log("data on view subs : ", data);
        this.currentTab = data;
        // console.log("shopping service: view current tab", this.currentTab);
      });

      
    }

  ngOnInit(): void {
    // console.log("init called");
    this.cartDetails = this.shoppingCartService.getCartDetails();
  }

  onTabClick(newTabValue:number){
    if (this.currentTab == 1) {
      this.shoppingCartService.setTabFlag();
    }
    console.log(newTabValue);
  }


}
