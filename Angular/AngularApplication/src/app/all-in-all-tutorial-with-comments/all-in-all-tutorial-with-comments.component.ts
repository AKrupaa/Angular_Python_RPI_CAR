import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-in-all-tutorial-with-comments',
  templateUrl: './all-in-all-tutorial-with-comments.component.html',
  styleUrls: ['./all-in-all-tutorial-with-comments.component.css']
})
export class AllInAllTutorialWithCommentsComponent implements OnInit {

  date_message:string;
  //  zmienna przechowująca aktualną date oraz czas (patrz konstruktor -> setInterval())

  constructor() { 

    setInterval(() => {
      let currentDate = new Date();
      this.date_message = currentDate.toDateString() + ' ' + currentDate.toTimeString();
    }, 1000);

    // async operation (`setInterval`) to dynamically update the date component's displayed value, 
    // so that it shows updates to the time value every second.
    // setInterval -> powoduje odświeżanie obiektu currentDate oraz date_message 
    // w celu wyświetlania co 1000ms czyli co jedną sekundę aktualnego czasu ustawionego w systemie
    
  }

  ngOnInit(): void {
  }

}
