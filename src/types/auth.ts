export type UserType = 'headhunter' | 'candidate';

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  createdAt: string;
  updatedAt: string;

  // 基本信息
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;

  // 猎头特有信息
  company?: string;
  position?: string;
  experience?: number;
  specialties?: string;
  achievements?: string;

  // 求职者特有信息
  education?: string;
  skills?: string;
  workHistory?: string;
  expectedSalary?: number;
  jobPreferences?: string;

  // 社交信息
  wechat?: string;
  linkedin?: string;
  website?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
  agreeToTerms: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface UpdateProfileData {
  // 基本信息
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;

  // 猎头特有信息
  company?: string;
  position?: string;
  experience?: number;
  specialties?: string;
  achievements?: string;

  // 求职者特有信息
  education?: string;
  skills?: string;
  workHistory?: string;
  expectedSalary?: number;
  jobPreferences?: string;

  // 社交信息
  wechat?: string;
  linkedin?: string;
  website?: string;
} 