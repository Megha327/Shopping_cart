import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ShippingDetailsComponent } from './view-cart/shipping-details/shipping-details.component';
import { ShoppingCartComponent } from './view-cart/shopping-cart/shopping-cart.component';
import { PaymentOptionsComponent } from './view-cart/payment-options/payment-options.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


const routes: Routes = [
  // {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'', component: DashboardComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'product/:id', component: ProductDescriptionComponent },
  {path:'cart', component: ViewCartComponent,
    children: [
      { path: '', redirectTo: 'shoppingcart', pathMatch: 'full' },
      // { path: '', component: ShoppingCartComponent },
      { path: 'shoppingcart', component: ShoppingCartComponent },
      { path: 'shippingdetails', component: ShippingDetailsComponent },
      { path: 'paymentoptions', component: PaymentOptionsComponent }
    ]
  },
  {path:'orderPlaced', component: OrderPlacedComponent },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,
                                  PageNotFoundComponent,
                                  ViewCartComponent,
                                ProductDescriptionComponent]
