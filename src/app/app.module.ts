import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import {RegisterComponent} from './register-user/register.component';
import {NexusService} from './nexus/nexus.service';
import { BiboComponent } from './bibo/bibo.component';
import {FlightResComponent} from './flightres/flightres.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    AddPostComponent,
    RegisterComponent,
    BiboComponent,
    FlightResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [NexusService],
  bootstrap: [RootComponent]
})
export class AppModule { }
