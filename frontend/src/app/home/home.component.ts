import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[FormsModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  backendStatus = '';
  
  checkBackend() {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => {
        this.backendStatus = '✅ Backend is running: ' + data.message;
      })
      .catch(err => {
        this.backendStatus = '❌ Backend not running';
      });
  }
}