import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-authentication-page',
  templateUrl: './profile-authentication-page.component.html',
  styleUrls: ['./profile-authentication-page.component.scss']
})
export class ProfileAuthenticationPageComponent implements OnInit {
  
  isActive: boolean = false; // State to manage the active class
  isFaculty: boolean = false; // State to manage the Faculty checkbox

  constructor() { }

  ngOnInit(): void { }

  toggleForm(): void {
    this.isActive = !this.isActive; // Toggle the active state
  }

  handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent form submission (refresh)
    // Handle form submission logic here
  }

  toggleTextarea(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isFaculty = checkbox.checked; // Update isFaculty based on checkbox state
  }
}
