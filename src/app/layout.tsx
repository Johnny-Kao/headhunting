import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HeadhunterHub - 猎头与候选人的连接平台',
  description: '一个让猎头闪耀、让候选人找到机会的平台。在这里，专业猎头可以建立个人品牌，扩展人脉网络，获取专业培训；候选人可以找到最适合的猎头顾问。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
} 