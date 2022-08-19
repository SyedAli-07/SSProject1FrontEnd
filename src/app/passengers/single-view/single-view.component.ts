import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengersService } from '../passengers.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  id!: number;
  passenger!: Passenger;

  constructor(
    private passengersService: PassengersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("this is the passenger id:", this.id)
    this.passengersService.getPassenger(this.id).subscribe((data:Passenger) =>{
      this.passenger = data;
    })
  }

}
