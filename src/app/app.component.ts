import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html' 
})
export class AppComponent {

  cool: string;

  constructor() {
    this.cool = "so much love";
  }

  onPolymerFireEvent(event: any) {
    alert(event.detail.message)
  }
}
