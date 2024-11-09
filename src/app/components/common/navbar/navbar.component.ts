import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    // Navbar Sticky
    isSticky: boolean = false;
    dropdownOpen: { [key: string]: boolean } = {};
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    toggleDropdown(menu: string) {
        this.dropdownOpen[menu] = !this.dropdownOpen[menu];
    }


    openPopup(popupType: string): void {
        let modal;
        if (popupType === 'advanceSearch') {
          modal = new bootstrap.Modal(document.getElementById('advanceSearchModal'));
        } 
        modal?.show();
      }
}