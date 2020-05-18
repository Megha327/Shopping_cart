import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products;
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(): void {
  }
  
  addToCart(productId:number){
    this.cartService.addProductToCart(productId);
  }
}
