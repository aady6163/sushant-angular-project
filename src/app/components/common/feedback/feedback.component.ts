import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor(
		public router: Router
    ) { }

    feedbackContent = [
        {
            sectionTitle: `Learners say about Edla`,
            paragraph: `Explore all of our courses and pick your suitable ones to enroll and start learning with us!`,
            feedback: [
                {
                    text: `Learning through websites has been a game-changer for me.The video lectures are engaging, and the quizzes help reinforce my understanding of the material. I appreciate the flexibility to learn at my own pace, which fits perfectly with my busy schedule. The forums and discussion boards also provide a sense of community and support. Overall, online learning has made education more accessible and convenient for me.`,
					img: `assets/img/user/u-1.jpg`,
					name: `Jasica Lora`,
					designation: `TV Model`
                },
                {
                    text: `My experience with online learning has been somewhat mixed.The ability to learn from experts around the world is a huge advantage. However, I sometimes struggle with staying motivated without the structure of a traditional classroom. Additionally, the lack of direct interaction with instructors can make it difficult to get immediate feedback or clarification on complex topics. While online learning offers great.`,
					img: `assets/img/user/u-2.jpg`,
					name: `Allien Zampa`,
					designation: `Developer`
                },
                {
                    text: `I have found learning through websites to be incredibly beneficial, especially with platforms like LinkedIn Learning and Skillshare. The short, focused video lessons make it easy to fit learning into my daily routine. I also love the feature where I can download course materials for offline use, making it convenient to learn even without internet access. The interactive elements, such as projects and peer .`,
					img: `assets/img/user/u-3.jpg`,
					name: `Ramos Leo`,
					designation: `Designer`
                },
                {
                    text: `Learning through websites hasn't been very effective for me.The content quality varies widely between different websites, and it's hard to know which courses are genuinely good. Moreover, technical issues like video buffering and website downtimes can be frustrating. While I appreciate the convenience, I feel that online learning lacks the engagement and personal touch of traditional education methods.`,
					img: `assets/img/user/u-4.jpg`,
					name: `Cris Hakimi`,
					designation: `Business Man`
                }
            ]
        }
    ]

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
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
			515: {
				items: 1
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }
    feedbackWithDotsSlides: OwlOptions = {
		nav: false,
		margin: 25,
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
			515: {
				items: 1
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }
    rtfeedbackSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}