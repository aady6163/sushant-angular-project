import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor() {}

    // Consolidated Feedback
    allFeedback = [
        {
            text: `Learning through websites has been a game-changer for me. The video lectures are engaging, and the quizzes help reinforce my understanding of the material.`,
            img: `assets/img/user/u-1.jpg`,
            name: `Jasica Lora`,
            designation: `TV Model`
        },
        {
            text: `My experience with online learning has been somewhat mixed. The ability to learn from experts around the world is a huge advantage.`,
            img: `assets/img/user/u-2.jpg`,
            name: `Allien Zampa`,
            designation: `Developer`
        },
        {
            text: `I have found learning through websites to be incredibly beneficial, especially with platforms like LinkedIn Learning and Skillshare.`,
            img: `assets/img/user/u-3.jpg`,
            name: `Ramos Leo`,
            designation: `Designer`
        },
        {
            text: `Learning through websites hasn't been very effective for me. The content quality varies widely between different websites.`,
            img: `assets/img/user/u-4.jpg`,
            name: `Cris Hakimi`,
            designation: `Business Man`
        },
        {
            text: `Online learning has made education accessible and convenient. The flexibility to learn at my own pace is a great advantage.`,
            img: `assets/img/user/u-5.jpg`,
            name: `Sophia Loren`,
            designation: `Marketing Specialist`
        },
        {
            text: `The interactive elements, such as projects and peer reviews, add a hands-on component that enhances my learning experience.`,
            img: `assets/img/user/u-6.jpg`,
            name: `David Beckham`,
            designation: `Engineer`
        },
        {
            text: `The quizzes help reinforce understanding of the material, and the forums provide a sense of community and support.`,
            img: `assets/img/user/u-7.jpg`,
            name: `Eleanor Bishop`,
            designation: `Content Creator`
        }
    ];

    // Carousel Options
    carouselOptions: OwlOptions = {
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-arrow-2'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    ngOnInit(): void {}
}
