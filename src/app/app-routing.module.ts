import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './modules/main-page/components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { MainPageModule } from './modules/main-page/main-page.module';
import { SharedModule } from './modules/shared/shared.module';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { PrivateComponent } from './modules/private/private.component';
import { authHelpRouteGuard } from './modules/shared/guards/authHelpRoute/auth-help-route.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'private', component: PrivateComponent, canActivate: [authHelpRouteGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
