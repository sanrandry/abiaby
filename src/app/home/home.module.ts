import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ThemeModule } from '../@theme/theme.module';
import { IndexComponent } from './index/index.component';
import { NbButtonModule, NbAlertModule } from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent, IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemeModule,
    NbButtonModule,
    NbAlertModule,
  ],
})
export class HomeModule { }
