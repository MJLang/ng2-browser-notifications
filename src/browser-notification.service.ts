import { Injectable } from '@angular/core';

@Injectable()
export class BrowserNotification {

  constructor() { 
  }

  public saySomething() {
    console.log('Hello yeah');
  }
}