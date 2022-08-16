import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newFlightForm! : FormGroup;

  constructor(
    private flightsservice: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      flightnumber : new FormControl('', Validators.required),
      departuredatetime : new FormControl('', Validators.required),
      departureairport : new FormControl('', Validators.required),
      arrivaldatetime : new FormControl('', Validators.required),
      arrivalairport : new FormControl('', Validators.required),
      maxcapacity : new FormControl('', Validators.required)
    })
  }

  get f() {return this.newFlightForm.controls;}

  submit() {
    this.flightsservice.createFlight(this.newFlightForm.value).subscribe(() => {
      console.log(this.newFlightForm.value);
      console.log(this.newFlightForm.valid);
      console.log("Flight Created Successfully!");
      this.router.navigateByUrl('flights/index');
    });
  }
}
