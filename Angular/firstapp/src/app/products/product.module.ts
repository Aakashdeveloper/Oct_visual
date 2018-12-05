import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/Router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductFilterPipe } from './filterProduct.pipe';
import { ProductDetailComponent } from './productDetail.Component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
        ]),
        SharedModule

     ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})


export class ProductModule {

}
