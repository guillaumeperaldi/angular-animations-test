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

  toggleShowNotifNav(): void {
    this.showNotifNav = !this.showNotifNav;
  }
}
