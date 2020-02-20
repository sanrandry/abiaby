import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class EditModule { }
