import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedProductCount = 0;

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
    console.log("selected product count: ", this.selectedProductCount);
  }

  switchCart(){
    // this.shoppingcartService.getAddToCartValue();
    this.shoppingcartService.setMessage(0);
    this.router.navigateByUrl("/cart");
  }

}
