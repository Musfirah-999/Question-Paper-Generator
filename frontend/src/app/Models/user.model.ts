export interface User {
  id: number;
  email: string;
  role: 'teacher' | 'student';
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  role: 'teacher' | 'student';
}