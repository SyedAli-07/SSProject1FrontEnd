import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newBookingForm!: FormGroup;

  constructor(
    private bookingsService: BookingsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBookingForm = new FormGroup({
      flightid : new FormControl('', Validators.required),
      passengerid : new FormControl('', Validators.required),
      confirmationnumber : new FormControl('', Validators.required),
    })
  }

  get f() {return this.newBookingForm.controls;}

  submit() {
    this.bookingsService.createBooking(this.newBookingForm.value).subscribe(() => {
      console.log(this.newBookingForm.value);
      console.log(this.newBookingForm.valid);
      console.log("Booking Created Successfully!");
      this.router.navigateByUrl('bookings/index');
    });
  }

}
