import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { OrderItemLineComponent } from './list/order-item-line/order-item-line.component';

@NgModule({
  declarations: [ListComponent, OrderItemLineComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class OrderModule { }
