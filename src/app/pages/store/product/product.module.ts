import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
  ],
})
export class ProductModule { }
