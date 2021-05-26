import { Component } from '@angular/core';
import { returnClass } from './abstractClasses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Testings';

  constructor() {
    returnClass();
  }

}
