import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { User,SignupRequest,LoginRequest } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private apiUrl = 'http://localhost:3000/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  // Load user from localStorage
  private loadUserFromStorage() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  // Signup
  signup(signupData: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, signupData);
  }

  // Login
  login(loginData: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Logout
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  // Save user data after login/signup
  setUser(user: User, token: string) {
    const userWithToken = { ...user, token };
    localStorage.setItem('currentUser', JSON.stringify(userWithToken));
    localStorage.setItem('token', token);
    this.currentUserSubject.next(userWithToken);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get current user
  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // Check if user is teacher
  isTeacher(): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === 'teacher' : false;
  }

  // Check if user is student
  isStudent(): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === 'student' : false;
  }
}
