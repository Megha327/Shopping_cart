import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { MockDataService } from '../Mock-Data-Service/mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
      // private http:HttpClient, 
      private mockService:MockDataService
    ) { }

  mockDataApi;

  public getProductsByOffsetAndMax(offset, max) {
    return this.mockService.getProducts(offset, max);
  }

  public getProducts() {
    let offset = 0;
    let max = 12;
    
    // this.http.get(url)
    return this.getProductsByOffsetAndMax(offset, max);
  }

  public getProductById(id) {
    return this.mockService.getProductById(id);
  }
}
