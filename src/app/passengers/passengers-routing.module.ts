import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PassengerIndexComponent } from './index/index.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path: 'passengers', redirectTo:'passengers/index', pathMatch: 'full'},
  {path: 'passengers/index', component: PassengerIndexComponent},
  {path: 'passengers/create', component: CreateComponent},
  {path: 'passengers/view/:id', component: SingleViewComponent},
  {path: 'passengers/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengersRoutingModule { }
