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
        component: DashboardComponent,
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then( m => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }
