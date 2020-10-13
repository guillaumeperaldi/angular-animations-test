import { Component, VERSION } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('panelAnimation', [
      transition(':enter', animate('500ms')),
      transition(':leave', animate('500ms'))
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
    console.log('panelAnimationStart');
    this.eventState = 'start';
    this.cssClass = this.showNotifNav ? 'animation-show': 'animation-hide';
    this.debug = ev;
  }

  panelAnimationEnd(ev: any): void {
    console.log('panelAnimationEnd'); 
    this.eventState = 'end';
    this.debug = ev;
  }
}
