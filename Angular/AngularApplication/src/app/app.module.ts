import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// https://www.dotnetcurry.com/angularjs/1438/http-client-angular
// Angular applications need an easy way to interact with these services over HTTP for data retrieval and updation. 
// For this purpose, Angular provides the HttpClient service.
import  { HttpClientModule } from '@angular/common/http';
import { ButtonsResponsibleForVehicleMovementComponent } from './buttons-responsible-for-vehicle-movement/buttons-responsible-for-vehicle-movement.component';

// tutorial
import { AllInAllTutorialWithCommentsComponent } from './all-in-all-tutorial-with-comments/all-in-all-tutorial-with-comments.component'
// Two way data binding with ngModel
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ButtonsResponsibleForVehicleMovementComponent,
    AllInAllTutorialWithCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // // Two way data binding with ngModel
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
