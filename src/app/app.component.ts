import { Component } from '@angular/core';
import * as jQuery from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cool: string;
  menu:any;
  constructor() {
    this.cool = "This is angular";
    this.menu=[
      {first: 'Bob', last: 'Angular Menu Link 1'},
      {first: 'Ayesha', last: 'Angular Menu Link  2'},
      {first: 'Fatma', last: 'Angular Menu Link  3'},
      {first: 'Tony', last: 'Angular Menu Link  4'}
    ];
  }

  onPolymerFireEvent(event: any) {
    alert(event.detail.message)
  }
}
