import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerDTO } from '../passenger';
import { PassengersService } from '../passengers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id!: number;
  public passenger!: PassengerDTO;
  public form! : FormGroup;

  constructor(
    public passengersService: PassengersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("this is the id", this.id)
    this.passengersService.getPassenger(this.id).subscribe((data: PassengerDTO) => {
      this.passenger = data;
      console.log(this.passenger)
    });

    this.form = new FormGroup({
      name : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),
      occupation : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.passengersService.updatePassenger(this.id, this.form.value).subscribe(() => {
      console.log("Passenger Details Updated Successfully!");
      this.router.navigateByUrl('passengers/index');
    })
  }


}
