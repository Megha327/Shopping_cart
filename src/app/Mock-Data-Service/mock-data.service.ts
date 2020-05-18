import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  // dummy data
  products = [
    {
      id: 1,
      title:"Product Name1",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 2,
      title:"Product Name2",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 3,
      title:"Product Name3",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 4,
      title:"Product Name4",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 5,
      title:"Product Name5",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 6,
      title:"Product Name6",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 7,
      title:"Product Name7",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 8,
      title:"Product Name8",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 9,
      title:"Product Name9",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 10,
      title:"Product Name10",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 11,
      title:"Product Name11",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 12,
      title:"Product Name12",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 13,
      title:"Product Name13",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 14,
      title:"Product Name14",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 15,
      title:"Product Name15",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 16,
      title:"Product Name16",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 17,
      title:"Product Name17",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 18,
      title:"Product Name18",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 19,
      title:"Product Name19",
      rating:3,
      price:1500,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 20,
      title:"Product Name20",
      rating:5,
      price:700,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    }
  ];

  productDetails = {
    1: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 5
    },
    2: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 4
    },
    3: {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt accusamus alias explicabo, amet ad asperiores, perferendis, odit aliquam quo ipsa eligendi sunt nesciunt nam cupiditate placeat magni? Officiis aut delectus voluptates vero impedit explicabo dolorum qui, nostrum dolor ullam facere rem nisi.",
      reviewCount: 2
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
      product_id: 1,
      model_id: 1,
      images: [
        "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395670971_1_1.jpg",
        "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/g/a/game-on_pr1_1.jpg",
        "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/l/k/lkm_matrev_1.jpg"
      ]
    },
    {
      product_id: 1,
      model_id: 2,
      images: [
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-11.png",
        "../../../assets/images/products/Lipsticsk-12.png"
      ]
    },
    {
      product_id: 1,
      model_id: 3,
      images: [
        "../../../assets/images/products/Lipsticsk-12.png",
        "../../../assets/images/products/Lipsticsk-10.png",
        "../../../assets/images/products/Lipsticsk-11.png"
      ]
    }
  ];

  coupons = [{
    code: "CODE15",
    discount: 15,
    min: 100
  },
  {
    code: "CODE50",
    discount: 50,
    min: 600
  },
  {
    code: "CODE200",
    discount: 200,
    min: 2000
  }]
  // dummy data end

  constructor(
    private http:HttpClient
  ) { }

  // Dummy Data Generator
  // private createProductDetails(product) {
  //   let index = product.id % 3 + 1;
  //   let productDetail = this.productDetails[index];
  //   this.http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
  //   .subscribe(desc => {
  //     product.description = desc;
  //   });
  // }

  private createModel(product) {
    product.models = this.models;
  }

  private createProductModel(product) {
    product.product_models = [];
    this.product_models.forEach(pm => {
      pm.product_id = product.id;
      product.product_models.push(pm);
    });
  }

  private createReveiws(product) {
    product.reviews = [];
    this.http.get("https://randomuser.me/api/?results=" + product.reviewCount)
      .subscribe( (response) => {
        this.http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=" + product.reviewCount)
        .subscribe( (description) => {
          let count = 0;
          response['results'].forEach(data => {
            let review = {};
            review['createdBy'] = data['name']['last'] + " " + data['name']['first'];
            review['createdDate'] = data['registered']['date'];
            review['creatorImage'] = data['picture']['large'];
            review['rating'] = Math.floor(Math.random() * 5) + 1; 
            review['description'] = description[count++];
            product.reviews.push(review);            
          });
          product.description = description[product.reviewCount-1];
        });
      });
      
  }






  // Public Data APIs

  public getProducts(offset, max) {
    return this.products.slice(offset, offset+max);
  }

  getProductsBySearchTermAndOffsetAndMax(searchTerm: string, offset, max) {
    let result = this.products
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if (result.length < offset) {
      return [];
    } else if (result.length < offset+max) {
      return result.slice(offset, result.length);
    } else {
      return result.slice(offset, offset+max);
    }
  }

  public getProductById(id:number){
    let productList = this.products.filter( (p)=> p.id == id );
    // console.log("mockdata: ", id, productList);
    if (productList.length == 0) {
      return {errors: {message: "Product not Found."}}
    }
    let product = productList[0];
    product['reviewCount'] = Math.floor(Math.random() * 5);
    this.createModel(product);
    this.createProductModel(product);
    this.createReveiws(product);
    // console.log("Mocked getProductById: ", product);
    return product; 
  }

public getProductByIds(ids: number[]) {
    let productList = ids.map(id => {
      let products = this.products.filter(product => id == product.id)
      if (products.length > 0) {
        return products[0];
      }
    })
    
    if (productList.length > 0) {
      this.http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=" + productList.length)
          .subscribe( (description) => {
            for(let i=0; i<productList.length; i++) {
              productList[i]['description'] = description[i]; 
            }
          });
          productList.forEach(product => {
            this.createProductModel(product);
            product['quantity'] = 1;
            this.createModel(product);
          })
      
    }
    return productList;
  }

  public getCouponByCode(code) {
    let coupon = this.coupons.filter(c => c.code == code);
    let couponDetail = {};
    if (coupon.length > 0) {
      couponDetail = coupon[0];
    } else {
      couponDetail["error"] = "Coupon not found"; 
    }
    return couponDetail;
  }
}
