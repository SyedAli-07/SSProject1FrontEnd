import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadChildren } from '@angular/router';
import { BkindexComponent } from './bookings/bkindex/bkindex.component';
import { IndexComponent } from './flights/index/index.component';
import { PassengerIndexComponent } from './passengers/index/index.component';

const routes: Routes = [
  {path: '', redirectTo:'flights/index', pathMatch: 'full'},
  {path: 'flights/', component: IndexComponent},
  {path: 'passengers/', component: PassengerIndexComponent},
  {path: 'bookings/', component: BkindexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
