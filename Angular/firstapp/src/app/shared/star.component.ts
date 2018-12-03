import { Component, OnChanges,
        Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 6;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }

}



/*

var sum = (a,b) => {
    return a+b
}

var out = sum(1,2)
*/
