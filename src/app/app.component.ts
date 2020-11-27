import { Component } from "@angular/core";
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import {
  slideInAnimation,
  slideOutAnimation,
  AnimationPhaseName
} from "./animations";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("enabledStateChange", [
      state(
        "start",
        style({
          background: "red"
        })
      ),
      state(
        "done",
        style({
          background: "green"
        })
      ),
      transition("* => *", animate("300ms ease-out"))
    ]),
    trigger("panelAnimation", [
      transition(":enter", [useAnimation(slideInAnimation)]),
      transition(":leave", [useAnimation(slideOutAnimation)])
    ])
  ]
})
export class AppComponent {
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
