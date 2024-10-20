import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    singleFeaturesBox = [
        {
            icon: `flaticon-technology`,
            title: `Learn the Latest Top Skills`
        },
        {
            icon: `flaticon-idea`,
            title: `Learn From Industry Experts`
        },
        {
            icon: `flaticon-laptop`,
            title: `Learn in Your Own Pace`
        },
        {
            icon: `flaticon-coaching`,
            title: `Enjoy Learning From Anywhere`
        }
    ]
    featuresWrapCard = [
        {
            icon: `assets/img/kitchen-coach/features/pot.svg`,
            title: `Meal Planning`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success`
        },
        {
            icon: `assets/img/kitchen-coach/features/fruit.svg`,
            title: `Reducing Food Waste`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success`
        },
        {
            icon: `assets/img/kitchen-coach/features/kitchen.svg`,
            title: `Knife Skills`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success`
        },
        {
            icon: `assets/img/kitchen-coach/features/rice.svg`,
            title: `Party Food`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success`
        }
    ]
    featuresWrapBox = [
        {
            icon: `assets/img/vendor-certification/features/skills.svg`,
            title: `Top Skills`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success.`
        },
        {
            icon: `assets/img/vendor-certification/features/rating.svg`,
            title: `Industry Experts`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success.`
        },
        {
            icon: `assets/img/vendor-certification/features/outline-create.svg`,
            title: `Portable Program`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success.`
        },
        {
            icon: `assets/img/vendor-certification/features/self-improvement.svg`,
            title: `Self Developmet`,
            paragraph: `This project will guide you through how to set up your kitchen and pantry to ensure you are set up for success.`
        }
    ]
    featuresCard = [
        {
            icon: `assets/img/remote-training/features/features1.png`,
            title: `Short & Accredited`,
            paragraph: `Ranging from 1 -14 Days or up to 12 Months. Courses length 30m.`
        },
        {
            icon: `assets/img/remote-training/features/features2.png`,
            title: `Classroom`,
            paragraph: `Nationwide Locations running monthly whether Face2face.`
        },
        {
            icon: `assets/img/remote-training/features/features3.png`,
            title: `Company’s Courses`,
            paragraph: `Design and Tailor courses for your team and deliver at a location.`
        },
        {
            icon: `assets/img/remote-training/features/features4.png`,
            title: `Online Training`,
            paragraph: `Self-paced, Study from anywhere E-learning Video courses.`
        }
    ]

    ngOnInit(): void {}

}