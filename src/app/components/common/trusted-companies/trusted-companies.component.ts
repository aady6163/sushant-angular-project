import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trusted-companies',
    templateUrl: './trusted-companies.component.html',
    styleUrls: ['./trusted-companies.component.scss']
})
export class TrustedCompaniesComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    ngOnInit(): void {}

    trustedCompaniesContent = [
        {
            title: `Trusted by companies`,
            paragraph: `Explore all of our courses and pick your suitable ones to enroll and start learning with us!`,
            buttonText: `View All Partners`,
            buttonLink: `/`,
            partnerList: [
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                },
                {
                    img: `assets/img/partner/partner.png`,
                }
            ]
        }
    ]

}