import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight'
import { FlightsService } from '../flights.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

    id!: number;
    flight!: Flight;

  constructor(
    private flightsService: FlightsService,
    private route: ActivatedRoute,
    private router: Router,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("this is the flight id:", this.id)
    this.flightsService.getFlight(this.id).subscribe((data:Flight) =>{
      this.flight = data;
    })
  }
}
