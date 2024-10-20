import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-oald-banner',
    templateUrl: './oald-banner.component.html',
    styleUrls: ['./oald-banner.component.scss']
})
export class OaldBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1500,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}