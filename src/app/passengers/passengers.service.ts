import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger, PassengerDTO } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  private passengersUrl = "https://localhost:7273/api/Passengers";

  private httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.passengersUrl, this.httpOptions);
  }

  getPassenger(id : number): Observable<Passenger> {
    let url = `${this.passengersUrl}/${id}`;
    return this.http.get<Passenger>(url, this.httpOptions);
  }

  createPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.passengersUrl, passenger, this.httpOptions);
  }

  updatePassenger(id : number, passenger: PassengerDTO): Observable<PassengerDTO> {
    let url = `${this.passengersUrl}/${id}`;
    return this.http.put<PassengerDTO>(url, JSON.stringify(passenger), this.httpOptions);
    // return this.http.put<Passenger>(url, passenger, this.httpOptions);
  }

  deletePassenger(id: number): Observable<Passenger> {
    return this.http.delete<Passenger>(`${this.passengersUrl}/${id}`, this.httpOptions);
  }


}
