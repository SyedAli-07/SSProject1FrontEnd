import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-bkindex',
  templateUrl: './bkindex.component.html',
  styleUrls: ['./bkindex.component.css']
})
export class BkindexComponent implements OnInit {

  bookings: Booking[] = []

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }

  retrieveBookings() : void {
    this.bookingsService.getBookings().subscribe(bookings => this.bookings = bookings);
  }

  deleteBooking(flightId: number, passengerId: number) {
    this.bookingsService.deleteBooking(flightId, passengerId).subscribe(res => {
      this.bookings = this.bookings.filter(item => item.flightId !== flightId && item.passengerId !== passengerId);
      console.log("Booking Successfully Deleted!");
    })
  }
}


// <td>
// <a href="#" [routerLink]="['/flights/view/', flight.id]" class="btn btn-info">Details</a>
// </td>
// <td>
// <a href="#" [routerLink]="['/flights/edit/', flight.id]" class="btn btn-primary">Edit</a>
// </td>