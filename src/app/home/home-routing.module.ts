import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'home', redirectTo:'home/index', pathMatch: 'full'},
  {path: 'home/index', component: HomeIndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
