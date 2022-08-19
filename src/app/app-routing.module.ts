import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadChildren } from '@angular/router';
import { BkindexComponent } from './bookings/bkindex/bkindex.component';
import { IndexComponent } from './flights/index/index.component';
import { HomeIndexComponent } from './home/index/index.component';
import { PassengerIndexComponent } from './passengers/index/index.component';

const routes: Routes = [
  {path: '', redirectTo:'home/index', pathMatch: 'full'},
  {path: 'home/index', component: HomeIndexComponent},
  {path: 'flights/index', component: IndexComponent},
  {path: 'passengers/index', component: PassengerIndexComponent},
  {path: 'bookings/index', component: BkindexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
