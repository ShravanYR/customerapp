import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { TestService } from './test.service';
import { OrderComponent } from './order/order.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CardComponent,
    ListComponent,
    CustomersComponent,
    AboutComponent,
    LoginComponent,
    CustomerOrderComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
