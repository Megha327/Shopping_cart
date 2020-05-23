import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedProductCount = 0;
  select=0;
  routerLink ;

  constructor(private router:Router,
      private shoppingcartService:ShoppingCartService
    ) {
      
      this.shoppingcartService.getProductCount()
      .subscribe(totalCount => {
        this.selectedProductCount = totalCount;
      });
      this.shoppingcartService.refreshDataFromLocalStorage();
  }

  ngOnInit(): void {
   
  }

  switchCart(){
    this.shoppingcartService.setMessage(0);
    this.router.navigateByUrl("/cart");
  }

  // goToDashboard(){
  //   this.select = 0;
  //   this.router.navigateByUrl("/dashboard");
  // }

}
