import { Component, VERSION } from "@angular/core";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";

export const slideInAnimation = animation([
  style({ transform: "translateX(100%)" }),
  animate("0.5s ease", style({ transform: "translateX(0%)" }))
]);

export const slideOutAnimation = animation([
  animate("0.5s ease", style({ transform: "translateX(100%)" }))
]);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("panelAnimation", [
      transition(":enter", animate("500ms")),
      transition(":leave", animate("500ms"))
    ]),
    trigger("panelAnimation1", [
      transition(":enter", [useAnimation(slideInAnimation)]),
      transition(":leave", [useAnimation(slideOutAnimation)])
    ])
  ]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  debug: any;
  eventState = "";
  showNotifNav = false;
  cssClass = "";

  toggleShowNotifNav(): void {
    this.showNotifNav = !this.showNotifNav;
    this.cssClass = this.showNotifNav ? "animation-show" : "animation-hide";
  }

  panelAnimationStart(ev: any): void {
    console.log("panelAnimationStart");
    this.eventState = "start";
    this.cssClass = this.showNotifNav ? "animation-show" : "animation-hide";
    this.debug = ev;
  }

  panelAnimationEnd(ev: any): void {
    console.log("panelAnimationEnd");
    this.eventState = "end";
    this.debug = ev;
  }
}
