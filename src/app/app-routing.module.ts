import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomersComponent } from './customers/customers.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"customers",component:CustomersComponent},
  {path:"order",component:OrderComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"card",component:CardComponent},
  {path:"list",component:ListComponent},
  {path:"customer-order",component:CustomerOrderComponent},
  {path:"edit",component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
