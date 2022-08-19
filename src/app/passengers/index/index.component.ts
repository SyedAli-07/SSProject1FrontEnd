import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengersService } from '../passengers.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PassengerIndexComponent implements OnInit {

  passengers: Passenger[] = []

  constructor(private passengersService: PassengersService) { }

  ngOnInit(): void {
    this.retrievePassengers();
  }

  retrievePassengers() : void {
    this.passengersService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  deletePassenger(id: number) {
    this.passengersService.deletePassenger(id).subscribe(res => {
      this.passengers = this.passengers.filter(item => item.id !== id);
      console.log("Passenger Successfully Deleted!");
    })
  }
}



