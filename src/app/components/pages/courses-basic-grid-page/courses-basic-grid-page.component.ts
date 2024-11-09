import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-courses-basic-grid-page',
  templateUrl: './courses-basic-grid-page.component.html',
  styleUrls: ['./courses-basic-grid-page.component.scss']
})
export class CoursesBasicGridPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openPopup(popupType: string): void {
    let modal;
    if (popupType === 'referFriend') {
      modal = new bootstrap.Modal(document.getElementById('referFriendModal'));
    } else if (popupType === 'reviewModal') { // Add this case for the review modal
      modal = new bootstrap.Modal(document.getElementById('reviewModal'));
    }
    modal?.show();
  }
}
