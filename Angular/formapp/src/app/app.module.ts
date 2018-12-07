import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './customers/form.component';
import { FormPosterService } from './services/formPoster.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FormPosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
