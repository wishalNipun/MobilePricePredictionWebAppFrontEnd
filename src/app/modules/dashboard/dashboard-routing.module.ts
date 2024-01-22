import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [{ 
  path: '', 
  component: DashboardComponent,
  children:[
    {
      path:'',
      redirectTo :'home',
      pathMatch:'full',
    },
    {
      path:'home',
      component: HomeComponent
    },
    {
      path:'detail',
      component: DetailComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
