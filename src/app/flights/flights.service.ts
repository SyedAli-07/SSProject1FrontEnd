import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, of, from } from 'rxjs';

import { Flight, FlightDTO } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private flightsUrl = "https://localhost:7273/api/Flights";

  // tempFlightData: Flight[] = [{"id":1,"flightnumber":"AA275","departuredatetime":"08\/13\/2022","departureairport":"LAX","arrivaldatetime":"08\/13\/2022","arrivalairport":"JFK","maxcapacity":100},{"id":2,"flightnumber":"SW120","departuredatetime":"08\/15\/2022","departureairport":"MDW","arrivaldatetime":"08\/15\/2022","arrivalairport":"ORD","maxcapacity":100}];

  private httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // getFlights(): Observable<Flight[]> {
  //   return new Observable<Flight[]>(observer => {
  //     observer.next(this.tempFlightData);
  //   });
  // }

  //   getFlights(): Observable<Flight[]> {
  //   return from(this.flightsUrl);
  // }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightsUrl, this.httpOptions);
  }

  getFlight(id : number): Observable<Flight> {
    let url = `${this.flightsUrl}/${id}`;
    return this.http.get<Flight>(url, this.httpOptions);
  }

  createFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.flightsUrl, flight, this.httpOptions);
  }

  updateFlight(id : number, flight: Flight): Observable<Flight> {
    let url = `${this.flightsUrl}/${id}`;
    return this.http.put<Flight>(url, JSON.stringify(flight), this.httpOptions);
    // return this.http.put<Flight>(url, flight, this.httpOptions);
  }

  deleteFlight(id: number): Observable<Flight> {
    return this.http.delete<Flight>(`${this.flightsUrl}/${id}`, this.httpOptions);
  }
  // createFlight(flight : FlightDTO) : Observable<Flight> {
  //   let flightToAdd: Flight ={
  //     id: this.tempFlightData.length + 1,
  //     flightnumber: flight.flightnumber,
  //     departuredatetime: flight.departuredatetime,
  //     departureairport: flight.departureairport,
  //     arrivaldatetime: flight.arrivaldatetime,
  //     arrivalairport: flight.arrivalairport,
  //     maxcapacity: flight.maxcapacity
  //   }
  //   this.tempFlightData.push(flight);
  //   return of(flightToAdd);
  // }
}
