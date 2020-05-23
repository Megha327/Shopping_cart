import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Api-service/api-service.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:{}[];
  loaderData = {
    offset: 0,
    max: 12,
    searchTerm: "",
    isAllDataFetched: false
  };
  
  constructor(
    private apiService:ApiServiceService,
    private router:Router,
    private cartService:ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.products = this.apiService.getProducts();
  }

  onSearch(searchTerm:string){
    this.loaderData.searchTerm = searchTerm;
    this.loaderData.offset = 0;
    this.loaderData.isAllDataFetched = false;
    this.products = this.apiService.getProductsByFilter(searchTerm);
  }

}
