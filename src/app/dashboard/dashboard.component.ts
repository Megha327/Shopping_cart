import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchItem:string;
  // dummy data
  products = [
    {
      id: 1,
      title:"Product Name",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 2,
      title:"Product Name",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 3,
      title:"Product Name",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 4,
      title:"Product Name",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 5,
      title:"Product Name",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    }
  ];
  // dummy data end
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data:string){
    console.log("onSubmit: "+ data);
    this.products = [
      {
        id: 1,
        title:"Product Name",
        rating:3,
        price:300,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      },
      {
        id: 2,
        title:"Product Name",
        rating:2,
        price:400,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      },
      {
        id: 3,
        title:"Product Name",
        rating:4,
        price:350,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      },
      {
        id: 4,
        title:"Product Name",
        rating:3,
        price:1500,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      },
      {
        id: 5,
        title:"Product Name",
        rating:5,
        price:700,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      },
      {
        id: 6,
        title:"Lipstick",
        rating:4,
        price:1000,
        thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
      }
    ];
  }

}
