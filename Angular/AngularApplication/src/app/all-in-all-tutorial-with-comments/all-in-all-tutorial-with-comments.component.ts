import { Component, OnInit } from '@angular/core';

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

  constructor() {

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


}
