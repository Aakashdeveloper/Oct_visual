import { Component, OnInit} from '@angular/core';
import { Customer} from '../models/customerForm.model';
import { NgForm} from '@angular/forms';
import { FormPosterService } from '../services/formPoster.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})


export class FormComponent {
    languages: any[] = ['AngularJS', 'NodeJS', 'ReactJs'];
    model = new Customer('John', 'andrew', 'a@a.com', true, 'male', 'AngularJS');
    hasCodelangError: Boolean = false;

    constructor(private _FormPosterService: FormPosterService) {}

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    validateCodeLang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodelangError = true;
        } else {
            this.hasCodelangError = false;
        }
    }


    submitForm(form: NgForm): void {
        // console.log(form.value)
        this._FormPosterService.postEmployee(form.value)
            .subscribe((data) => console.log('success'));
    }
}



/*
    ng-pristine  ng-untouched ng-valid
    ng-dirty    ng-touched     ng-invalid

*/
