import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

import {Flights} from '../models/flights.model';

 
@Component({
  selector: 'app-bibo',
  templateUrl: './bibo.component.html',
  providers: [],
})

export class BiboComponent {

    public flight: Flights;

   constructor(private router: Router){
          this.flight = new Flights();
        }

        goHome(){
            this.router.navigate(['/flightres']);
          }

          onSubmit() {
            alert('SUCCESS!!');
        }

        goRegister(){
            this.router.navigate(['/register']);
          }

  }
