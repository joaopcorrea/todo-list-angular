import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-angular';

  searchValue = "";

  callTest(event: string) {
    console.log('hehe '+ event);
  }
}
