import { Component} from '@angular/core';
import { Customer} from '../models/customerForm.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})


export class FormComponent {
    languages: any[] = ['AngularJS', 'NodeJS', 'ReactJs'];
    model = new Customer('John', '', '', true, '', '');

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }
}



/*
    ng-pristine  ng-untouched ng-valid
    ng-dirty    ng-touched     ng-invalid

*/
