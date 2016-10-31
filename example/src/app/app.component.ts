import { Component } from '@angular/core';
import { BrowserNotification, Browser } from './../../../src';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notification: BrowserNotification) {

  }
  title = 'app works!';

  public sendNotification() {
    this.notification.displayNotification('Hello there!');
  }
}
