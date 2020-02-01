import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreComponent } from './store.component';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
})
export class StoreModule { }
