import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-oecd-banner',
    templateUrl: './oecd-banner.component.html',
    styleUrls: ['./oecd-banner.component.scss']
})
export class OecdBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerContent = [
        {
            title: `The World’s Leading Distance Learning Provider`,
            paragraph: `Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Edla can offer you enjoy the beauty of eLearning!`,
            buttonText: `Search Courses Now`,
            placeholderText: `What do you want to learn today?`,
            image: `assets/img/dark-home/banner/main.png`
        }
    ]

}