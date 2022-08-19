export interface Passenger {
    id: number;
    name: string;
    age: number;
    occupation: string;
    email: string;
    bookedFlights: any[];
}

export interface PassengerDTO{
    id: number;
    name: string;
    age: number;
    occupation: string;
    email: string;
}