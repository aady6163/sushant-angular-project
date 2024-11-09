import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recent-viewing-courses',
    templateUrl: './recent-viewing-courses.component.html',
    styleUrls: ['./recent-viewing-courses.component.scss']
})
export class RecentViewingCoursesComponent implements OnInit {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
    constructor(
		public router: Router
    ) { }

    ngOnInit(): void {}




  courses = [
    {
      image: 'assets/img/courses/q-1.png',
      title: 'SAP and ERP for Beginners',
      author: 'Milind Sathe',
      rating: '5.0',
      stars: [1, 2, 3, 4, 5],
      reviews: '1,600',
      newPrice: '₹99',
      oldPrice: '₹199'
    },
    {
      image: 'assets/img/courses/q-2.png',
      title: 'Scholarship English',
      author: 'PIACIAS',
      rating: '4.0',
      stars: [1, 2, 3, 4],
      reviews: '1,100',
      newPrice: '₹69',
      oldPrice: '₹89'
    },
    {
      image: 'assets/img/courses/q-3.png',
      title: 'UPSC Prelims General Studies Test 2023 - II',
      author: 'PIACIAS',
      rating: '3.5',
      stars: [1, 2, 3, 4, 5],
      reviews: '1,800',
      newPrice: '₹39',
      oldPrice: '₹59'
    },
    {
      image: 'assets/img/courses/q-4.png',
      title: '8th Scholarship English Quiz 3',
      author: 'Purushottam Thoke',
      rating: '5.0',
      stars: [1, 2, 3, 4, 5],
      reviews: '550',
      newPrice: '₹49',
      oldPrice: null 
    }
  
  ];

  scrollCarousel(direction: number) {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = container.offsetWidth; // Scroll by container width
    container.scrollLeft += direction * scrollAmount;
  }

}