export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'headhunter' | 'candidate';
  createdAt: string;
  updatedAt: string;
} 