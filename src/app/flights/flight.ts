export interface Flight {
    // Fill out with flight schema 
    id: number;
    flightNumber : string;
    departureDateTime : string;
    departureAirport : string;
    arrivalDateTime : string;
    arrivalAirport : string;
    maxCapacity : number;
}

export interface FlightDTO {
    flightNumber : string;
    departureDateTime : string;
    departureAirport : string;
    arrivalDateTime : string;
    arrivalAirport : string;
    maxCapacity : number;
}
