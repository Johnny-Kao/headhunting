'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, LoginCredentials, SignupData, AuthState, UpdateProfileData } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: UpdateProfileData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // TODO: 从 cookie 中获取用户信息
    // 这里应该：
    // 1. 检查 auth_token cookie
    // 2. 验证令牌
    // 3. 获取用户信息
    setState(prev => ({ ...prev, isLoading: false }));
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      console.log('开始登录请求');

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      console.log('登录响应状态:', response.status);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || '登录失败');
      }

      const data = await response.json();
      console.log('登录成功:', data);

      setState(prev => ({
        ...prev,
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      }));
    } catch (error) {
      console.error('登录错误:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : '登录失败',
        isLoading: false,
      }));
      throw error;
    }
  };

  const signup = async (data: SignupData) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      console.log('开始注册请求');

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('注册响应状态:', response.status);

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || '注册失败');
      }

      const responseData = await response.json();
      console.log('注册成功:', responseData);

      setState(prev => ({
        ...prev,
        user: responseData.user,
        isAuthenticated: true,
        isLoading: false,
      }));
    } catch (error) {
      console.error('注册错误:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : '注册失败',
        isLoading: false,
      }));
      throw error;
    }
  };

  const logout = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      console.log('开始登出请求');

      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      console.log('登出响应状态:', response.status);

      if (!response.ok) {
        throw new Error('登出失败');
      }

      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error('登出错误:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : '登出失败',
        isLoading: false,
      }));
      throw error;
    }
  };

  const updateProfile = async (data: UpdateProfileData) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      console.log('开始更新用户资料');

      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('更新用户资料响应状态:', response.status);

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || '更新用户资料失败');
      }

      const responseData = await response.json();
      console.log('更新用户资料成功:', responseData);

      setState(prev => ({
        ...prev,
        user: responseData,
        isLoading: false,
      }));
    } catch (error) {
      console.error('更新用户资料错误:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : '更新用户资料失败',
        isLoading: false,
      }));
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth 必须在 AuthProvider 内部使用');
  }
  return context;
} 