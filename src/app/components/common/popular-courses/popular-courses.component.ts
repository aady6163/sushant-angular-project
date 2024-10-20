import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-popular-courses',
    templateUrl: './popular-courses.component.html',
    styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    ngOnInit(): void {}

    coursesSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1170: {
				items: 4
			},
			1200: {
				items: 5
			},
			1550: {
				items: 6
			}
		}
    }

}