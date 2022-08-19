import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsModule } from './flights/flights.module';
import { PassengersModule } from './passengers/passengers.module';
import { BookingsModule } from './bookings/bookings.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    FlightsModule,
    PassengersModule,
    BookingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
