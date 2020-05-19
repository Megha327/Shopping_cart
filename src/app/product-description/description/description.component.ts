import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Api-service/api-service.service';
import { ShoppingCartService } from 'src/app/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() product:{};
  currentProductModel ;
  
  constructor(
      private route:ActivatedRoute, 
      private apiService:ApiServiceService,
      private cartService: ShoppingCartService
    ) { }

  ngOnInit(): void {
    this.currentProductModel = this.product['product_models'][0];
    this.currentProductModel['selected'] = this.currentProductModel['images'][0];
  }

  onChangeModelId(modelId:number) {
    let productModels = this.product['product_models'];
    this.currentProductModel = productModels.filter((pm) => pm['model_id'] == modelId)[0];
    this.currentProductModel['selected'] = this.currentProductModel['images'][0];
    console.log("onchange: ", this.currentProductModel ); 
  }

  onChangeImageBox(imgsrc) {
    this.currentProductModel['selected'] = imgsrc;
  }

  addProductToCart(productId:number, quantity: number){

    this.cartService.addProductToCartWithModel(productId, this.currentProductModel['model_id']);
  }
}
