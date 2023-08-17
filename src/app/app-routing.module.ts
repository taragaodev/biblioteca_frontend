import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./views/home/home.module').then(
      (m) => m.HomeModule
    )
  },
  {
    path: '**', redirectTo: ''
  }
  // {
  //   path: 'home', canActivateChild: [AuthGuardService], 
  //   loadChildren: () => import('./views/home/home.module').then(
  //     (m) => m.HomeModule
  //   )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
