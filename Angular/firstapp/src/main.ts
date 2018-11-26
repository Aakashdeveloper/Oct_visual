import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  /*
  Module=> All Declration happen
  Component=> Contains Html css and logics
  Pipe=> help to do runtime data change
  Service=>help to do dependency injection & connect to third party
  */
