import { Injectable } from '@angular/core';
import { getBrowserVendor } from './detect-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
@Injectable()
export class BrowserNotification {

  constructor() { 
    if (!('Notification' in window)) {
      console.log('nah');
      return;
    } else {
      this.askPermission().subscribe((result) => {
        console.log(result);
      });
    }
  }

  public askPermission() {
    Observable.bind
    return Observable.fromPromise(Notification.requestPermission());
  }

  public getBrowserType() {
    return getBrowserVendor();
  }



  public canNotify(): boolean {
    let browser = getBrowserVendor();


    
    return false;
  }
}