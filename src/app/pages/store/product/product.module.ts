import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule { }
