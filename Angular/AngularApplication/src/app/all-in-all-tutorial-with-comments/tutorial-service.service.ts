import { Injectable } from '@angular/core';

  // Understanding dependency injection
@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

  constructor() { }

  consoleLogWhichSaysThatServiceWorks(argument: string) {
    console.log("Service is working! " + argument)
  }
}
