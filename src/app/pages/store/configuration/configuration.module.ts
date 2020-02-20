import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class ConfigurationModule { }
