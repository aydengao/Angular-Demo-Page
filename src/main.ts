import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import {bootstrapApplication} from "@angular/platform-browser";

// Creating page based on module
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// Creating page based on component
bootstrapApplication(AppComponent);
