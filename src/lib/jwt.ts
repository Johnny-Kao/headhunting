import jwt from 'jsonwebtoken';
import type { User } from '@/types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function generateToken(user: User): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      userType: user.userType,
    },
    JWT_SECRET,
    {
      expiresIn: '24h',
    }
  );
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
} 