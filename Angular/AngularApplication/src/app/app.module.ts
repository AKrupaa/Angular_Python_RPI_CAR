import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Making REST calls with HttpClient
import  { HttpClientModule } from '@angular/common/http';
// Component which allow to use buttons and send data through HttpClient to the back-end
import { ButtonsResponsibleForVehicleMovementComponent } from './buttons-responsible-for-vehicle-movement/buttons-responsible-for-vehicle-movement.component';

// tutorial
import { AllInAllTutorialWithCommentsComponent } from './all-in-all-tutorial-with-comments/all-in-all-tutorial-with-comments.component'
// Two way data binding with ngModel
import { FormsModule } from '@angular/forms'
// Understanding dependency injection
import { TutorialServiceService } from './all-in-all-tutorial-with-comments/tutorial-service.service';

@NgModule({
  // declarations zawierają wszystkie komponenty, które są częścią modułu
  declarations: [
    AppComponent,
    // Component which allow to use buttons and send data through HttpClient to the back-end
    ButtonsResponsibleForVehicleMovementComponent,
    AllInAllTutorialWithCommentsComponent
  ],
  // imports zawierają wszystkie inne MODUŁY, które ten moduł (AppModule) zależy od
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Making REST calls with HttpClient
    HttpClientModule,
    // // Two way data binding with ngModel
    FormsModule
  ],
  // providers zawierają wszystkie serwisy, które należą do modułu (AppModule) 
  providers: [
    // dodanie serwisu
    // Understanding dependency injection
    TutorialServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
