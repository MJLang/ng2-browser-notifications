import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
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


  public askPermission(): Observable<NotificationPermission> {
    return Observable.fromPromise(Notification.requestPermission()).map((permission: string) => {
      switch (permission) {
        case 'denied':
          return NotificationPermission.Denied;
        case 'granted':
          return NotificationPermission.Granted;
        default:
          return NotificationPermission.Default;
      }
    });
  }

  public displayNotification(title: string, body?: string): Observable<Notification> {
    if (!this.notificationsAvailable) return Observable.throw(new Error('Browser does not support Notifications'));
    let notificationOptions: NotificationOptions = {body};
    return Observable.from([new Notification(title, notificationOptions)]);
  }
}