import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

import {Flights} from '../models/flights.model';


 
@Component({
  selector: 'app-flightres',
  templateUrl: './flightres.component.html',
  providers: [],
})

export class FlightResComponent {

    public flight: Flights;

   constructor(private router: Router){
          this.flight = new Flights();
        }

        goHome(){
            this.router.navigate(['/bibo']);
          }

  }
