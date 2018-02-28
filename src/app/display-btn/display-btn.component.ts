import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-display-btn',
    templateUrl: './display-btn.component.html',
    styleUrls: ['./display-btn.component.css']
})
export class DisplayBtnComponent implements OnInit {
    isDisplayed = false;
    btnLabel = 'Display Details';
    btnText = '';
    log = [];

    constructor() { }

    ngOnInit() {
    }

    onDisplay() {
        this.isDisplayed = !this.isDisplayed;
        this.btnText = 'Well, hello there.';
        this.log.push(new Date());
    }

    getBkgColor() {
        return this.log.length > 5 ? 'blue' : 'white';
    }

    resetNumClicks() {
        this.log.length = 0;
    }
}
