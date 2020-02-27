import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoboardRoutingModule } from './dashoboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbCardModule, NbListModule, NbTabsetModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ReviewTabComponent } from './review-tab/review-tab.component';

@NgModule({
  declarations: [DashboardComponent, ChartLineComponent, ReviewTabComponent],
  imports: [
    CommonModule,
    DashoboardRoutingModule,
    NbCardModule,
    NbListModule,
    ChartModule,
    NbTabsetModule,
  ]
})
export class DashoboardModule { }
