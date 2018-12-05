import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';

@Injectable()

export class ProductService {

    private productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private __http: HttpClient) { }


    getProducts(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this.productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(`${this.productUrl}?productId=${id}`);
    }

}



/*
getProduct(): Promise<IProduct[]> {
            return this._http.get(this.productUrl)
                    .toPromise()
                    .then((res) => res.json());
        }

 private extractData(res: Response) {
            return res.json();
        }

        getProducts(): Observable<IProduct[]> {
            return this._http.get(this.productUrl)
                    .pipe(map(this.extractData));
        }
*/
