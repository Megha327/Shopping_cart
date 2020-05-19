import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ApiServiceService } from 'src/app/Api-service/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products:{}[];
  @Input() loaderData;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  
  constructor(
    private cartService:ShoppingCartService,
    private apiService:ApiServiceService
  ) { }

  ngOnInit(): void {
  }
  
  addToCart(productId:number){
    this.cartService.addProductToCart(productId);
  }

  onScrollDown () {
    if(!this.loaderData.isAllDataFetched) {
      this.loaderData.offset = this.loaderData.offset + this.loaderData.max;
      let newProductsList = this.apiService.getProductsBySearchTermAndOffsetAndMax(
        this.loaderData.searchTerm, this.loaderData.offset, this.loaderData.max);
      if (newProductsList.length > 0) {
        Array.prototype.push.apply(this.products, newProductsList);
      }
      if (newProductsList.length < 12) {
        this.loaderData.isAllDataFetched = true;
      }
    }
  }
  
}
