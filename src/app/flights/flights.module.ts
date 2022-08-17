import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SingleViewComponent } from './single-view/single-view.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    SingleViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
