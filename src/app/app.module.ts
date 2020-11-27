import { NgModule } from "@angular/core";
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Page1Component } from "./components/page1/page1.component";
import { Page2Component } from "./components/page2/page2.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "./components/page1", component: Page1Component },
      { path: "./components/page2", component: Page2Component }
    ])
  ],
  declarations: [AppComponent, Page1Component, Page2Component],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ]
})
export class AppModule {}
