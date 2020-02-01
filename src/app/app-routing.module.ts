import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/authetication/guards/auth.guard';
import { PublicGuard } from './shared/authetication/guards/public.guard';

const routes: Routes = [
  {
    path: ':userId',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    canActivate: [PublicGuard],
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    canActivate: [PublicGuard],
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
   },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
