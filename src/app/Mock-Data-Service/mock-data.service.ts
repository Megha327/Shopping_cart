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
      title:"MAC Impassioned Lipstick",
      rating:3,
      price:300,
      thumbnail:"https://images-na.ssl-images-amazon.com/images/I/711ksyUlqfL._SL1500_.jpg"
    },
    {
      id: 2,
      title:"Colorbar Velvet Matte Lipstick",
      rating:2,
      price:400,
      thumbnail:"https://images-static.nykaa.com/media/catalog/product/2/3/23767_h-8901030586507.jpg?tr=w-500,pr-true"
    },
    {
      id: 3,
      title:"Inglot Lipstick 106",
      rating:4,
      price:350,
      thumbnail:"https://cdn2.stylecraze.com/wp-content/uploads/2013/03/2156_Best-NYX-Lipsticks-%E2%80%93-Our-Top-10.jpg"
    },
    {
      id: 4,
      title:"ELLE 18 Lipstick",
      rating:3,
      price:1500,
      thumbnail:"https://images-na.ssl-images-amazon.com/images/I/616016gqUfL._SY355_.jpg"
    },
    {
      id: 5,
      title:"Lakme Absolute Matte Lipcolor",
      rating:5,
      price:700,
      thumbnail:"https://rukminim1.flixcart.com/image/352/352/k5jxfgw0/lipstick/s/k/k/2-matte-attack-transferproof-lipstick-03-the-grandberries-dark-original-imafnxcz5gf2ffjg.jpeg?q=70"
    },
    {
      id: 6,
      title:"Chambor Powder Matte",
      rating:3,
      price:300,
      thumbnail:"https://images-na.ssl-images-amazon.com/images/I/61Z8EcDdcLL._SL1500_.jpg"
    },
    {
      id: 7,
      title:"Deborah Milano Red Shade",
      rating:2,
      price:400,
      thumbnail:"https://m.smashbox.com/media/images/products/875x773/sbx_sku_72107_875x773_0.jpg"
    },
    {
      id: 8,
      title:"Faces Satin Jazzberry Jam",
      rating:4,
      price:350,
      thumbnail:"../../../assets/images/products/Lipsticsk-11.png"
    },
    {
      id: 9,
      title:"Bourjois So Delicate",
      rating:3,
      price:1500,
      thumbnail:"https://img.grouponcdn.com/deal/sYYnyLq5jgxgUugo8YKDFsLKyN4/sY-1844x1106/v1/c700x420.jpg"
    },
    {
      id: 10,
      title:"FENTY Beauty BY RIHANNA",
      rating:5,
      price:700,
      thumbnail:"https://images.herzindagi.info/image/2018/Sep/different-types-of-lipstick-and-its-use-main.jpg"
    },
    {
      id: 11,
      title:"MAC Lipstick",
      rating:3,
      price:300,
      thumbnail:"../../../assets/images/products/Lipsticsk-10.png"
    },
    {
      id: 12,
      title:"HANAMI Beauty Lipstick",
      rating:2,
      price:400,
      thumbnail:"../../../assets/images/products/Lipsticsk-12.png"
    },
    {
      id: 13,
      title:"Nyx Soft Matte",
      rating:4,
      price:350,
      thumbnail:"https://thehauterfly.com/wp-content/uploads/2019/06/inpost-8-1.png"
    },
    {
      id: 14,
      title:"Stila Stay All Day Liquid Lipstick",
      rating:3,
      price:1500,
      thumbnail:"https://images-na.ssl-images-amazon.com/images/I/71%2BV%2Bx412aL._SL1300_.jpg"
    },
    {
      id: 15,
      title:"Kylie Cosmetics Matte Lipstick",
      rating:5,
      price:700,
      thumbnail:"https://images-na.ssl-images-amazon.com/images/I/61iRwHWiYeL._SL1300_.jpg"
    },
    {
      id: 16,
      title:"Charlotte Tilbury Matte Lipstick",
      rating:3,
      price:300,
      thumbnail:"https://beautypeople.co.in/wp-content/uploads/2020/03/Beauty-People-Sheer-Color-Lipstick-300x300.jpg"
    },
    {
      id: 17,
      title:"NARS Matte Lipstick",
      rating:2,
      price:400,
      thumbnail:"https://images.asos-media.com/products/nars-sheer-lipstick-sex-shuffle/13575580-4?$XXL$&wid=513&fit=constrain"
    },
    {
      id: 18,
      title:"Hudda Beauty Matte Lipstick",
      rating:4,
      price:350,
      thumbnail:"https://rukminim1.flixcart.com/image/352/352/jxtakcw0/lipstick/j/7/v/1-power-bullet-matte-lipstick-pink-huda-beauty-original-imafg6tkztrmdbhn.jpeg?q=70"
    },
    {
      id: 19,
      title:"Jeffree Star lipstick",
      rating:3,
      price:1500,
      thumbnail:"https://pyxis.nymag.com/v1/imgs/de0/8fe/2832337a81b785ae1a70d699d0433bd58f.rsquare.w600.jpg"
    },
    {
      id: 20,
      title:"Yves Saint Laurent Tatouage Lipstick",
      rating:5,
      price:700,
      thumbnail:"https://www.byrdie.com/thmb/rWgtfE6zLh3vgoLRWC4mKtNcVEY=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/HourglassCosmeticsOpaqueRougeLiquidLipstick-5c50caa84cedfd0001ddb730.jpg"
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
    },
    {
      id: 4,
      text: "Brown"
    }
  ];

  product_models = [
    {
      product_id: 1,
      model_id: 1,
      images: [
        "../../../assets/images/products/redMain.jpg",
        "../../../assets/images/products/redLeft.jpeg",
        "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/l/k/lkm_matrev_1.jpg"
      ]
    },
    {
      product_id: 1,
      model_id: 2,
      images: [
        "../../../assets/images/products/pinkMain.jpg",
        "../../../assets/images/products/pinkLeft.jpeg",
        "../../../assets/images/products/pinkright.jpg"
      ]
    },
    {
      product_id: 1,
      model_id: 3,
      images: [
        "../../../assets/images/products/NudeMain.jpg",
        "../../../assets/images/products/nudeleft.jpg",
        "../../../assets/images/products/nuderight.jpeg"
      ]
    },
    {
      product_id: 1,
      model_id: 4,
      images: [
        "../../../assets/images/products/brownMain.jpeg",
        "../../../assets/images/products/brownLeft.jpg",
        "../../../assets/images/products/browright.png"
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

  vouchers = [{
    code: "ABC15",
    discount: 15,
    min: 100
  },
  {
    code: "XYZ50",
    discount: 50,
    min: 600
  },
  {
    code: "PQR200",
    discount: 200,
    min: 2000
  }]
  // dummy data end

  constructor(
    private http:HttpClient
  ) { }

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
    if (productList.length == 0) {
      return {errors: {message: "Product not Found."}}
    }
    let product = productList[0];
    product['reviewCount'] = Math.floor(Math.random() * 5);
    this.createModel(product);
    this.createProductModel(product);
    this.createReveiws(product);
    return product; 
  }

public getProductByIds(ids: number[]) {
    let productList = ids.map(id => {
      let products = this.products.filter(product => id == product.id)
      if (products.length > 0) {
        // Coping object to save from data reference.
        return JSON.parse(JSON.stringify(products[0]));
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

  public getVoucherByCode(code) {
    let voucher = this.vouchers.filter(c => c.code == code);
    let voucherDetail = {};
    if (voucher.length > 0) {
      voucherDetail = voucher[0];
    } else {
      voucherDetail["error"] = "Voucher not found"; 
    }
    console.log("mockdata: ",voucherDetail);
    return voucherDetail;
  }

  public getShippingCostForFast() {
    return 20;
  }
}
