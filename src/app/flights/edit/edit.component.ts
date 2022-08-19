import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight, FlightDTO } from '../flight';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id!: number;
  public flight!: FlightDTO;
  public form! : FormGroup;

  constructor(
    public flightsService: FlightsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.flightsService.getFlight(this.id).subscribe((data: FlightDTO) => {
      this.flight = data;
      // let flightData = {
      //   flightNumber: data.flightNumber,
      //   departureDateTime: data.departureDateTime,
      //   departureAirport: data.departureAirport,
      //   arrivalDateTime: data.arrivalDateTime,
      //   arrivalAirport: data.arrivalAirport,
      //   maxCapacity: data.maxCapacity
      // }
      // this.flight = flightData;
      console.log(this.flight)
    });

    this.form = new FormGroup({
      flightnumber : new FormControl('', Validators.required),
      departuredatetime : new FormControl('', Validators.required),
      departureairport : new FormControl('', Validators.required),
      arrivaldatetime : new FormControl('', Validators.required),
      arrivalairport : new FormControl('', Validators.required),
      maxcapacity : new FormControl('', Validators.required),
      // bookedpassengers: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.flightsService.updateFlight(this.id, this.form.value).subscribe(() => {
      console.log("Flight Details Updated Successfully!");
      this.router.navigateByUrl('flights/index');
    })
  }

}
