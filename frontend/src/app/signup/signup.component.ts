import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  password = '';
  confirmPassword = '';
  role = 'student';
  error = '';
  success = '';
  
  signup() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.error = 'Please fill all fields';
      return;
    }
    
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    
    // Mock signup for Day 1
    this.success = `Account created as ${this.role}! (Day 1 Mock)`;
    this.error = '';
    
    // Clear form
    setTimeout(() => {
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.success = '';
    }, 2000);
  }
}