import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `<div>
                    <h1>This is my first component</h1>
                    <app-prod></app-prod>
                    <app-dashboard></app-dashboard>
              </div>`
})

export class AppComponent {

}
