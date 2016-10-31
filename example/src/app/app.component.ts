import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrowserNotification, Browser } from './../../../src';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public messageTitle: FormControl;
  public messageBody: FormControl;
  constructor(private notification: BrowserNotification) {

  }
  title = 'app works!';

  ngOnInit() {
    this.messageTitle = new FormControl();
    this.messageTitle.setValue('Hello World');

    this.messageBody = new FormControl();
    this.messageBody.setValue('Test Body');
  }

  public sendNotification() {
    this.notification.displayNotification(this.messageTitle.value, this.messageBody.value).subscribe((message) => {
      console.log(message);
    });
  }
}
