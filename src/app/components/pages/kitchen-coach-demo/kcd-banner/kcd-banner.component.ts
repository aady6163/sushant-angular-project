import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-kcd-banner',
    templateUrl: './kcd-banner.component.html',
    styleUrls: ['./kcd-banner.component.scss']
})
export class KcdBannerComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit(): void {}

    bannerContent = [
        {
            title: `Learn cooking and teach cooking`,
            paragraph: `Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Edla can offer you to enjoy the beauty of eLearning!`,
            buttonText: `Find Courses`,
            buttonLink: `/courses-grid`,
            videoButtonText: `Watch Video`,
            videoButtonIcon: `assets/img/kitchen-coach/banner/play.svg`,
            image: `assets/img/kitchen-coach/banner/main.jpg`
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