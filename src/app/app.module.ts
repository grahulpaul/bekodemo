import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllordersComponent } from './allorders/allorders.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    ProductsComponent,
    AddOrderComponent,
    DashboardComponent,
    LoginComponent,
    AllusersComponent,
    AllordersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          {
            path: 'addcustomer', component: AddCustomerComponent,
          },
          {
            path: 'addorder', component: AddOrderComponent
          },
          {
            path: 'products', component: ProductsComponent,
          },
          {
            path: 'allusers',component:AllusersComponent,
          },
          {
            path:' allorders',component:AllordersComponent
          } 
        ]
      }

    ])
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
