import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flights } from '../models/flights.model';
 
@Injectable()
export class AddPostService {
 
    constructor(private http: HttpClient){
 
    }

    checkFlights(flight: Flights){
        return this.http.post('http://localhost:3000/api/flight/searchFlights',{
            triptype : flight.triptype,
            from : flight.from,
            destination: flight.destination,
            departure: flight.departure,
            return: flight.return,
            adults: flight.adults,
            children: flight.children,
            infants: flight.infants
        })
    }
 
}