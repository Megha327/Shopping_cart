import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';
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

      
      this.router.events
         .pipe(filter(e => e instanceof NavigationEnd))
         .subscribe((e: NavigationEnd) => {
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
        this.currentTab = data;
      });

      
    }

  ngOnInit(): void {
    this.cartDetails = this.shoppingCartService.getCartDetails();
  }

 

}
