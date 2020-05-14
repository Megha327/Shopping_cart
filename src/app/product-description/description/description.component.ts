import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Api-service/api-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
 id:number;
 product:{};
  constructor(
      private route:ActivatedRoute, 
      private apiService:ApiServiceService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id  = params['id'];
    });
    
    this.product = this.apiService.getProductById(this.id);
    console.log("id: ", this.id, this.product);
  }

}
