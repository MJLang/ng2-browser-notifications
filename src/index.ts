import { NgModule } from '@angular/core';
// import { CommonModule} from '@angular/common';
import { BrowserNotification } from './browser-notification.service';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [BrowserNotification],
})
export class BrowserNotificationModule { }

export * from './browser-notification.service';
export { Browser } from './detect-browser';