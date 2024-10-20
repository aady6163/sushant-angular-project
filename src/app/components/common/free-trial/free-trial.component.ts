import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-free-trial',
    templateUrl: './free-trial.component.html',
    styleUrls: ['./free-trial.component.scss']
})
export class FreeTrialComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    ngOnInit(): void {}

}