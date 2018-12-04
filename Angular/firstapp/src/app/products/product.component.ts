import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import { IProduct } from './product.model';


@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:green}', 'h3{color:tomato}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '~~~~Product list~~~~';
    showTable: Boolean = true;
    showImage: Boolean = true;
    filterText: String;
    imageWidth: Number = 150;

    products: any[];

    constructor(private _productService: ProductService ) {}

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe((data) => this.products = data);

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = '~~~Product List~~~~' + message;
    }
}



/*
One Way
    --Data Binding {{}}
    --Event Binding ()
    --Property Binding []
Two Way [()]

string
number
boolean

this._productService.getProduct()
        .then((data) => this.products = data);
*/
