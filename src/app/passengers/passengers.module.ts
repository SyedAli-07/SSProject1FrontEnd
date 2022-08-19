import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengersRoutingModule } from './passengers-routing.module';
import { PassengerIndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    PassengerIndexComponent,
    CreateComponent,
    SingleViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PassengersRoutingModule
  ]
})
export class PassengersModule { }
