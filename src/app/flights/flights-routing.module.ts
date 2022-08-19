import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'flights', redirectTo:'flights/index', pathMatch: 'full'},
  {path: 'flights/index', component: IndexComponent},
  {path: 'flights/create', component: CreateComponent},
  {path: 'flights/view/:id', component: SingleViewComponent},
  {path: 'flights/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
