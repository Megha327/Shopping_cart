import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(
    private http:HttpClient
  ) { }


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
    },
    {
      id: 6,
      title:"Product Name",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 7,
      title:"Product Name",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 8,
      title:"Product Name",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 9,
      title:"Product Name",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 10,
      title:"Product Name",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 11,
      title:"Product Name",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 12,
      title:"Product Name",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 13,
      title:"Product Name",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 14,
      title:"Product Name",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 15,
      title:"Product Name",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 16,
      title:"Product Name",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 17,
      title:"Product Name",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 18,
      title:"Product Name",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 19,
      title:"Product Name",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 20,
      title:"Product Name",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    }
  ];

  productDetails = {
    1: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 5
    },
    2: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 5
    },
    3: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 5
    }
  };

  models = [
    {
      id: 1,
      text: "Red"
    },
    {
      id: 2,
      text: "Pink"
    },
    {
      id: 3,
      text: "Nude"
    }
  ];

  product_models = [
    {
      id: 1,
      model_id: 1,
      images: [
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png"
      ]
    },
    {
      id: 2,
      model_id: 2,
      images: [
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png"
      ]
    },
    {
      id: 3,
      model_id: 3,
      images: [
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-10.png"
      ]
    }
  ];
  // dummy data end

  // Dummy Data Generator
  private createProductDetails(product) {
    let index = product.id % 3 + 1;
    let productDetail = this.productDetails[index];
    product.description = productDetail.description;
    product.reviewCount = productDetail.reviewCount;
  }

  private createModel(product) {
    product.models = this.models;
  }

  private createProductMode(product) {
    product.product_models = this.product_models;
  }

  private createReveiws(product) {
    product.reviews = [];
    let description = [
      "1",
      "2",
      "3",
      "4",
      "5"
    ];

      this.http.get("https://randomuser.me/api/?results=" + product.reviewCount)
      .subscribe( (response) => {
        response['results'].forEach(data => {
          let review = {};
          review['createdBy'] = data['name']['last'] + " " + data['name']['first'];
          review['createdDate'] = data['registered']['date'];
          review['creatorImage'] = data['picture']['large'];
          review['rating'] = Math.floor(Math.random() * 5) + 1; 
          review['description'] = description[Math.floor(Math.random() * 5)];
          product.reviews.push(review);            
        });
      })
      
  }






  // Public Data APIs

  public getProducts(offset, max) {
    return this.products.slice(offset, offset+max);
  }

  public getProductById(id:number){
    let productList = this.products.filter( (p)=> p.id == id );
    console.log("mockdata: ", id, productList);
    if (productList.length == 0) {
      return {errors: {message: "Product not Found."}}
    }
    let product = productList[0];
    this.createProductDetails(product);
    this.createModel(product);
    this.createProductMode(product);
    this.createReveiws(product);
    console.log("Mocked getProductById: ", product);
    return product; 
  }


}
