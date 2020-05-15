import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ViewCartComponent } from './view-cart/view-cart.component';


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component: DashboardComponent },
  {path:'product/:id', component: ProductDescriptionComponent },
  {path:'cart', component: ViewCartComponent },
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
