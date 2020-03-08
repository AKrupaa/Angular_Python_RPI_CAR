import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  { HttpClientModule } from '@angular/common/http';
import { ButtonsResponsibleForVehicleMovementComponent } from './buttons-responsible-for-vehicle-movement/buttons-responsible-for-vehicle-movement.component'
// https://www.dotnetcurry.com/angularjs/1438/http-client-angular
// Angular applications need an easy way to interact with these services over HTTP for data retrieval and updation. 
// For this purpose, Angular provides the HttpClient service.

@NgModule({
  declarations: [
    AppComponent,
    ButtonsResponsibleForVehicleMovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
