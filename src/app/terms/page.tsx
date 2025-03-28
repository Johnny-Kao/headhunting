'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">服務條款</h1>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-16 h-16 text-blue-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">頁面建置中</h2>
                <p className="text-gray-600 mb-8">
                  我們正在努力完善服務條款內容，敬請期待。
                </p>
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 