import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkindexComponent } from './bkindex/bkindex.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: 'bookings', redirectTo:'bookings/index', pathMatch: 'full'},
  {path: 'bookings/index', component: BkindexComponent},
  {path: 'bookings/create', component: CreateComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
