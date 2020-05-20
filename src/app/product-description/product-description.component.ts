import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../Api-service/api-service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  id:number;
  product:{};
  
  constructor(
      private Apiservice:ApiServiceService,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id  = params['id'];
    });
    this.product = this.Apiservice.getProductById(this.id);
  }

}
