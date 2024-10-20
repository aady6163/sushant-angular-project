import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-paid-courses-single-page',
    templateUrl: './paid-courses-single-page.component.html',
    styleUrls: ['./paid-courses-single-page.component.scss']
})
export class PaidCoursesSinglePageComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit(): void {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}