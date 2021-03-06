import { Injectable } from '@angular/core';
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

  public getProductsByFilter(searchTerm:string) {
    let offset:number = 0;
    let max:number = 12;
  
    // this.http.get(url)
    return this.getProductsBySearchTermAndOffsetAndMax(searchTerm, offset, max);
  }

  public getProductsBySearchTermAndOffsetAndMax(searchTerm: string, offset, max) {
    return this.mockService.getProductsBySearchTermAndOffsetAndMax(searchTerm, offset, max);
  }

  public getProductById(id) {
    // http.get("Url for getProductById")
    return this.mockService.getProductById(id);
  }

  public getProductByIds(ids: number[]) {
    return this.mockService.getProductByIds(ids);
  }

  public getCouponByCode(code:string) {
    return this.mockService.getCouponByCode(code);
  }

  public getVoucherByCode(code:string) {
    return this.mockService.getVoucherByCode(code);
  }

  public getShippingCostForFast() {
    return this.mockService.getShippingCostForFast();
  }
}
