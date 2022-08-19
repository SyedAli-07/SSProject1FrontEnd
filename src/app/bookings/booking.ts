import { Flight } from "../flights/flight";
import { Passenger } from "../passengers/passenger";

export interface Booking {
    flightId: number;
    flight: Flight;
    passengerId: number;
    passenger: Passenger;
    confirmationNumber: number;
}


export interface BookingDTO{
    flightId: number;
    passengerId: number;
    confirmationNumber: number;
}

