import { Component } from '@angular/core';
import { BrowserNotification, Browser } from './../../../src';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notification: BrowserNotification) {
    let browserType = this.notification.getBrowserType();
    console.log(Browser[browserType]);
  }
  title = 'app works!';
}
