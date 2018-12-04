import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductFilterPipe } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/productDetail.Component';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ])
    ],

    // All Components & Pipe will come here
    declarations: [
        AppComponent,
        DashBoardComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilterPipe,
        StarComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent,
        ProductDetailComponent
    ],
    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All Services will go here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
