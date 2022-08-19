import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private bookingsUrl = "https://localhost:7273/api/Bookings";

  private httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl, this.httpOptions);
  }
 
  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking, this.httpOptions);
  }

  deleteBooking(flightId: number, passengerId: number): Observable<Booking> {
    return this.http.delete<Booking>(`${this.bookingsUrl}/${flightId}/${passengerId}`, this.httpOptions);
  }

}
