import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customerForm.model';

@Injectable()

export class FormPosterService {
    constructor(private http: Http) {}

    private extractData( res: Response) {
        return res.json();
    }

    postEmployee(customer: Customer): Observable<any[]> {
        // console.log('coming in service', customer);
        const body = JSON.stringify(customer);
        const headers  = new Headers({'Content-type': 'application/json'});
        const options = new RequestOptions({headers : headers});
        return this.http.post('http://localhost:3000/postemployee', body, options)
            .pipe(map(this.extractData));
    }
}


