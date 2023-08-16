import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./views/home/home.module').then(
  //     (m) => m.HomeModule
  //   )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
