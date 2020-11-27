import { animate, animation, style } from "@angular/animations";

export const animationBaseTimer = "0.5s";

export const slideInAnimation = animation([
  style({ transform: "translate3D(100%,0,0)" }),
  animate(
    `${animationBaseTimer} ease`,
    style({ transform: "translate3D(0,0,0)" })
  )
]);

export const slideOutAnimation = animation([
  animate(
    `${animationBaseTimer} ease`,
    style({ transform: "translate3D(100%,0,0)" })
  )
]);

/**
 * The animation phase in which the callback was invoked, one of
 * "start" or "done".
 */
export enum AnimationPhaseName {
  "start" = "start",
  "done" = "done"
}
