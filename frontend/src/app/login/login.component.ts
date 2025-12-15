import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  
  login() {
    if (!this.email || !this.password) {
      this.error = 'Please fill all fields';
      return;
    }
    
    // Mock login for Day 1
    if (this.email === 'teacher@test.com' && this.password === 'test123') {
      alert('Login successful as Teacher! (Day 1 Mock)');
    } else if (this.email === 'student@test.com' && this.password === 'test123') {
      alert('Login successful as Student! (Day 1 Mock)');
    } else {
      this.error = 'Invalid credentials. Use test accounts';
    }
  }
}