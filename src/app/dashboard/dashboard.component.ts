import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Api-service/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:{}[];
  
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.products = this.apiService.getProducts();
    // console.log("dashboard: ", this.products);
  }

  onSearch(searchTerm:string){
    console.log("onSubmit: ", searchTerm);
    this.products = this.apiService.getProductsByFilter(searchTerm);
  }

}
