import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  flights: Flight[] = []

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }

  retrieveFlights() : void {
    this.flightsService.getFlights().subscribe(flights => this.flights = flights);
  }

  deleteFlight(id: number) {
    this.flightsService.deleteFlight(id).subscribe(res => {
      this.flights = this.flights.filter(item => item.id !== id);
      console.log("Flight Successfully Deleted!");
    })
  }

}
  