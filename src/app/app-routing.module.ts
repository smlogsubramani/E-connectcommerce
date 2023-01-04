import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Manual Imports


import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';
import { FeedbackComponent } from './feedback/feedback.component';


//Route path
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'billing',component:BillingComponent},
  {path:'feedback',component:FeedbackComponent},

];


//common imports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents =[HomeComponent,ProductComponent,BillingComponent,FeedbackComponent]
