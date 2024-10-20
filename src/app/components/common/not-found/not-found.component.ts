import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    notFoundContent = [
        {
            img: `assets/img/error.png`,
            title: `Oops! That page can't be found`,
            paragraph: `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`,
            buttonText: `Back to Home`,
            buttonLink: `/`
        }
    ]

}