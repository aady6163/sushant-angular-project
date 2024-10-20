import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-become-an-instructor',
    templateUrl: './become-an-instructor.component.html',
    styleUrls: ['./become-an-instructor.component.scss']
})
export class BecomeAnInstructorComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    ngOnInit(): void {}

}