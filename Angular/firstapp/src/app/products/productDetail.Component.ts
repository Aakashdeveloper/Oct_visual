import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/Router';
import { IProduct } from './product.model';
import { ProductService} from './product.service';

@Component({
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    name: String;
    description: String;
    image: String;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];

        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }


}


/*
this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.description = data['desc'];
                this.image = data['img'];
            });

*/
