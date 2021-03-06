import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './dashboard/search/search.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { DescriptionComponent } from './product-description/description/description.component';
import { ReviewsComponent } from './product-description/reviews/reviews.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ShoppingCartComponent } from './view-cart/shopping-cart/shopping-cart.component';
import { ShippingDetailsComponent } from './view-cart/shipping-details/shipping-details.component';
import { PaymentOptionsComponent } from './view-cart/payment-options/payment-options.component';
import { SummaryComponent } from './view-cart/summary/summary.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    routingComponents,
    SearchComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    DescriptionComponent,
    ReviewsComponent,
    ViewCartComponent,
    ShoppingCartComponent,
    ShippingDetailsComponent,
    PaymentOptionsComponent,
    SummaryComponent,
    OrderPlacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
