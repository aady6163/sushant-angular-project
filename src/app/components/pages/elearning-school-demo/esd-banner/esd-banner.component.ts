import { Component, OnInit } from '@angular/core';
declare var bootstrap: any; // Declare bootstrap globally for use in the component

@Component({
  selector: 'app-esd-banner',
  templateUrl: './esd-banner.component.html',
  styleUrls: ['./esd-banner.component.scss']
})
export class EsdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(popupType: string): void {
    let modal;
    if (popupType === 'referFriend') {
      modal = new bootstrap.Modal(document.getElementById('referFriendModal'));
    } 
    modal?.show();
  }
}
