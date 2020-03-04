import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { OrderItemLineComponent } from './list/order-item-line/order-item-line.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [ListComponent, OrderItemLineComponent, ShowComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
  ]
})
export class OrderModule { }
