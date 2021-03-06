import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [ListComponent, IndexComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    ThemeModule,
    NbCardModule,
  ]
})
export class ListModule { }
