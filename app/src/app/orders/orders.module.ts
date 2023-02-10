import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';


@NgModule({
  declarations: [
    OrdersDashboardComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
