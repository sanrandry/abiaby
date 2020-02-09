import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, ProductFormComponent, EditComponent],
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
