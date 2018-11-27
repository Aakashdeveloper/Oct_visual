import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule
    ],

    // All Components & Pipe will come here
    declarations: [
        AppComponent,
        DashBoardComponent,
        ProductComponent
    ],

    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All Services will go here
    providers: []
})

export class AppModule {

}
