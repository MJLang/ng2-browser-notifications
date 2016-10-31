import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrowserNotification, Browser } from './../../../src';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public messageText: FormControl;
  constructor(private notification: BrowserNotification) {

  }
  title = 'app works!';

  ngOnInit() {
    this.messageText = new FormControl();
    this.messageText.setValue('Hello World');
  }

  public sendNotification() {
    this.notification.displayNotification(this.messageText.value).subscribe((message) => {
      console.log(message);
    });
  }
}
