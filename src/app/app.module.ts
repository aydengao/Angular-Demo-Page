import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";

// A component module is needed if a component is not marked standalone
// A component cannot be standalone and have its own module
@NgModule({
  // declarations: [
  //   AppComponent
  // ],
    imports: [
        BrowserModule,
        HomeComponent
    ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
