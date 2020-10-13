import { Component, VERSION } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('panelAnimation', [
      transition(':enter', animate('5000ms ease-in-out')),
      transition(':leave', animate('5000ms ease-in-out'))
    ])
  ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  debug: any;
  eventState = '';
  showNotifNav = false;
  cssClass = '';

  toggleShowNotifNav(): void {
    this.showNotifNav = !this.showNotifNav;
    this.cssClass = this.showNotifNav ? 'animation-show': 'animation-hide';
  }

  panelAnimationStart(ev: any): void {
    this.eventState = 'start';
    this.cssClass = this.showNotifNav ? 'animation-show': 'animation-hide';
    this.debug = ev;
  }

  panelAnimationEnd(ev: any): void {
    this.eventState = 'end';
    this.debug = ev;
  }
}
