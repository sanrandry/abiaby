import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { map } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
  },
  {
    path: ':companyId',
    component: StoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashoboard.module').then(m => m.DashoboardModule),
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then( m => m.ProductModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then( m => m.OrderModule),
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }
