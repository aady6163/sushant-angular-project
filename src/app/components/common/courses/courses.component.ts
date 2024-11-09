import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  @ViewChild('scrollContainerRef', { static: false }) scrollContainerRef!: ElementRef;
  
  scrollContainer(direction: number) {
    const container = this.scrollContainerRef.nativeElement;
    const scrollAmount = container.offsetWidth; // Scroll by container width
    container.scrollLeft += direction * scrollAmount;
  }
    isBookmarked = false;

    constructor(public router: Router) { }

    ngOnInit(): void {}

    toggleBookmark(): void {
        this.isBookmarked = !this.isBookmarked;
    }

    coursesSlides: OwlOptions = {
        margin: 25,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-arrow-2'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }

   
}
