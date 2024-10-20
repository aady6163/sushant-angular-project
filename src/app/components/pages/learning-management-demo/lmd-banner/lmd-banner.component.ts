import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lmd-banner',
    templateUrl: './lmd-banner.component.html',
    styleUrls: ['./lmd-banner.component.scss']
})
export class LmdBannerComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit(): void {}

    bannerContent = [
        {
            title: `Simply certified with the enterprise`,
            paragraph: `Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Edla can offer you enjoy the beauty of eLearning!`,
            buttonText: `Register Now`,
            buttonLink: `/profile-authentication`,
            videoButtonText: `Watch Video`,
            videoButtonIcon: `assets/img/kitchen-coach/banner/play.svg`,
            image: `assets/img/vendor-certification/banner/main.png`,
            bgImage: `assets/img/vendor-certification/banner/banner-bg.jpg`
        }
    ]

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}