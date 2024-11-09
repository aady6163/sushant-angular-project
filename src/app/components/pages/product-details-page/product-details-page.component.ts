import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  
  // Property to track the visibility of tab_bar
  isTabBarVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  // Toggle the visibility of the tab_bar
  toggleTabBar(): void {
    this.isTabBarVisible = !this.isTabBarVisible;
  }

  // Input Counter
  inputnumber = 1;
  plus() {
    this.inputnumber = this.inputnumber + 1;
  }
  minus() {
    if (this.inputnumber != 1) {
      this.inputnumber = this.inputnumber - 1;
    }
  }
}
