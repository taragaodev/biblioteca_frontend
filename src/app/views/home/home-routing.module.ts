import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardService } from 'src/app/resources/services/auth-guard.service';

const routes: Routes = [{
  path: '', 
  canActivate:[AuthGuardService],
  component: HomeComponent,  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
