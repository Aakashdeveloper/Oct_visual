import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductFilterPipe } from './products/filterProduct.pipe';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Components & Pipe will come here
    declarations: [
        AppComponent,
        DashBoardComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilterPipe
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
