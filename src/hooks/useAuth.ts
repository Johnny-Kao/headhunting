'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  userType: 'headhunter' | 'candidate';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();
      
      if (data.success) {
        setState({ user: data.user, loading: false, error: null });
      } else {
        setState({ user: null, loading: false, error: null });
      }
    } catch (error) {
      setState({ user: null, loading: false, error: '認證檢查失敗' });
    }
  };

  const login = async (email: string, password: string, rememberMe: boolean = false) => {
    try {
      setState({ ...state, loading: true, error: null });
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setState({ user: data.user, loading: false, error: null });
        router.push('/dashboard');
      } else {
        setState({ ...state, loading: false, error: data.message });
      }
    } catch (error) {
      setState({ ...state, loading: false, error: '登入失敗' });
    }
  };

  const signup = async (name: string, email: string, password: string, userType: 'headhunter' | 'candidate') => {
    try {
      setState({ ...state, loading: true, error: null });
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, userType }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setState({ user: data.user, loading: false, error: null });
        router.push('/dashboard');
      } else {
        setState({ ...state, loading: false, error: data.message });
      }
    } catch (error) {
      setState({ ...state, loading: false, error: '註冊失敗' });
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setState({ user: null, loading: false, error: null });
      router.push('/');
    } catch (error) {
      setState({ ...state, error: '登出失敗' });
    }
  };

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    signup,
    logout,
    checkAuth,
  };
} 