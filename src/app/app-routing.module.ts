import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {RegisterComponent} from './register-user/register.component';
import {BiboComponent} from './bibo/bibo.component';
import {FlightResComponent} from './flightres/flightres.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bibo', component: BiboComponent},
  { path: 'flightres', component: FlightResComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
