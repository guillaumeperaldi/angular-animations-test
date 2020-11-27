import { Component, VERSION } from "@angular/core";
import {
  animate,
  animation,
  AnimationEvent,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";

/**
 * The animation phase in which the callback was invoked, one of
 * "start" or "done".
 */
export enum AnimationPhaseName {
  "start" = "start",
  "done" = "done"
}

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
  animationPhase = AnimationPhaseName;

  toggleShowNotifNav(): void {
    this.showNotifNav = !this.showNotifNav;
  }

  panelAnimationStartCallBack(event: AnimationEvent): void {
    this.eventState = event.phaseName;
    // do something on start
    console.log(event.phaseName);
  }

  panelAnimationEndCallBack(event: AnimationEvent): void {
    this.eventState = event.phaseName;
    // do something on end
    console.log(event.phaseName);
  }
}
