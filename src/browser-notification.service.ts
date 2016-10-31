import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromPromise';
import { NotificationPermission } from './notification-permission';

@Injectable()
export class BrowserNotification {
  private notificationsAvailable: boolean;

  public permission: BehaviorSubject<NotificationPermission> = new BehaviorSubject<NotificationPermission>(null);
  constructor() { 
    this.notificationsAvailable = !!('Notification' in window);
    // Dont bother setting up if the browser does not support notifications
    if (!this.notificationsAvailable) return;
    
  }

  public askPermission() {
    return Observable.fromPromise(Notification.requestPermission());
  }

  public displayNotification(message: string) {
    let notification: Notification = new Notification(message);
  }
}