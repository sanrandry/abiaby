import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    ThemeModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class CreateModule { }
