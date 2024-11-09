import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-authentication-page',
  templateUrl: './profile-authentication-page.component.html',
  styleUrls: ['./profile-authentication-page.component.scss']
})
export class ProfileAuthenticationPageComponent implements OnInit {
  isActive: boolean = false;
  isFaculty: boolean = false;
  isPasswordVisible: boolean = false; // For main password field
  isConfirmPasswordVisible: boolean = false; // For confirm password field

  constructor() { }

  ngOnInit(): void { }

  toggleForm(): void {
    this.isActive = !this.isActive;
  }

  handleFormSubmit(event: Event): void {
    event.preventDefault();
  }

  toggleTextarea(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isFaculty = checkbox.checked;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }
}
