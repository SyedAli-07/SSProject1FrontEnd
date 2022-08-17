import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path: 'flights', redirectTo:'flights/index', pathMatch: 'full'},
  {path: 'flights/index', component: IndexComponent},
  {path: 'flights/create', component: CreateComponent},
  {path: 'flights/:id', component: SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
