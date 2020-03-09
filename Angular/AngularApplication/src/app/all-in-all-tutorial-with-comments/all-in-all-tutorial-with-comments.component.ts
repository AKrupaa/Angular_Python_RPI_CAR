import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
import { TutorialServiceService } from './tutorial-service.service';

@Component({
  selector: 'app-all-in-all-tutorial-with-comments',
  templateUrl: './all-in-all-tutorial-with-comments.component.html',
  styleUrls: ['./all-in-all-tutorial-with-comments.component.css']
})
export class AllInAllTutorialWithCommentsComponent implements OnInit {


  //  zmienna przechowująca aktualną date oraz czas (patrz konstruktor -> setInterval())
  date_message:string;
  
  // zmienna przechowująca liczbę 10
  someNumber: number = 10;

  // Understanding dependency injection
  constructor(private tutorialService: TutorialServiceService) {
    // Understanding dependency injection
    // sprawdz konsole w swojej przegladarce!
    tutorialService.consoleLogWhichSaysThatServiceWorks(">dowolony dodatkowy tekst<");

    // async operation (`setInterval`) to dynamically update the date component's displayed value, 
    // so that it shows updates to the time value every second.
    // setInterval -> powoduje odświeżanie obiektu currentDate oraz date_message 
    // w celu wyświetlania co 1000ms czyli co jedną sekundę aktualnego czasu ustawionego w systemie

    setInterval(() => {
      let currentDate = new Date();
      this.date_message = currentDate.toDateString() + ' ' + currentDate.toTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

  // metoda addTwoNumbers(a: number, b: number) pozwala dodać dwie liczby
  // aby wywołać ją w .html
  // należy wpisać:
  // {{ addTwoNumbers(1, 100) }}
  // wtedy w .HTML pojawi nam się liczba 101
  // można ją również wywołać w ten sposób: 
  // {{ addTwoNumbers(someNumber, 1) }}
  // zwrócony wynik to 11, ponieważ zmienna someNumber wynosi 10

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }

  // metoda someOtherMethod() wywołuje metodę addTwoNumbers(..., ...) TEJ klasy
  // aby wywołać ją w .HTML wystarczy {{ someOtherMethod() }}
  someOtherMethod() {
    this.addTwoNumbers(this.someNumber, 12);
  }

  // Looping with ngFor -> patrz .HTML
  // "Struktura" danych, dzięki niej nauczysz się używać *ngFor
  user: any = {
    name: "Arkadiusz",
    title: "Tytuł",
    address: "Politechnika Łódzka",
    phone: [
      '123-456-789',
      '987-654-321'
    ]
  };

  // Using *ngIf -> patrz .HTML
  learning_ngIf: number = 4;

  // Using @Input
  // Learn how to pass data to your components to 'parameterize' them. 
  // Use the `@Input()` decorator to designate a component member variable 
  // as an input and thus configure the component API.
  // działa tak jak lista inicjalizująca w języku C++
  @Input('TextToDisplay') inputedTextToDisplay: string;
  // sprawdź plik app.component.html
  // warto zajrzeć również pod ngOnInit()

  // wykorzystywanie eventów
  isCollapsed: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Two way data binding with ngModel, sprawdz również app.module.ts
  inputedText: string = "Initial text";
}