import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authHelpRouteGuard } from './guards/authHelpRoute/auth-help-route.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./modules/private/private.module').then((m) => m.PrivateModule),
    canActivate: [authHelpRouteGuard],
  },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
