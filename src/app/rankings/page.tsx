'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

// 模拟数据
const topHeadhunters = [
  {
    id: 1,
    name: '山田太郎',
    title: '資深科技獵頭顧問',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    industry: '科技業',
    location: '東京',
    rating: 4.8,
    totalDeals: '¥2.5億',
    successfulPlacements: 156,
    rank: 1,
  },
  {
    id: 2,
    name: '鈴木花子',
    title: '金融產業獵頭專家',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    industry: '金融業',
    location: '大阪',
    rating: 4.9,
    totalDeals: '¥2.1億',
    successfulPlacements: 142,
    rank: 2,
  },
  {
    id: 3,
    name: '佐藤健一',
    title: '醫療科技獵頭顧問',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
    industry: '醫療科技',
    location: '東京',
    rating: 4.7,
    totalDeals: '¥1.8億',
    successfulPlacements: 128,
    rank: 3,
  },
  {
    id: 4,
    name: '中村美咲',
    title: '互聯網獵頭專家',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    industry: '互聯網',
    location: '福岡',
    rating: 4.8,
    totalDeals: '¥1.5億',
    successfulPlacements: 167,
    rank: 4,
  },
  {
    id: 5,
    name: '木村拓也',
    title: '投資業獵頭顧問',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    industry: '投資業',
    location: '大阪',
    rating: 4.9,
    totalDeals: '¥1.2億',
    successfulPlacements: 178,
    rank: 5,
  }
];

export default function RankingsPage() {
  const [showModal, setShowModal] = useState(false);

  const handleUpgradeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalAction = async (action: 'close' | 'contact') => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxn3bRzgvFRPPLFN6xecYUfOdMhXwYgUqH69tKOGKxnZbwaBNf4IF5HX6y0JQRStA2s/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          page: 'rankings',
          timestamp: new Date().toISOString(),
        })
      });
    } catch (err) {
      console.error('提交數據時發生錯誤:', err);
    }
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* 页面标题 */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">獵頭排行榜</h1>
            <p className="mt-4 text-lg text-gray-600">
              發現最優秀的獵頭顧問，找到最適合你的合作夥伴
            </p>
            <div className="mt-2 text-sm text-gray-500">
              資料更新時間：每週一 00:00
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 排行榜说明 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              我們依據以下指標綜合評比每位獵頭
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">簽約成交金額</h3>
                  <p className="text-sm text-gray-500">反映實際業務成果</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">候選人評分與評論</h3>
                  <p className="text-sm text-gray-500">真實用戶反饋</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">回應率與活躍度</h3>
                  <p className="text-sm text-gray-500">服務品質指標</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">產業配對精準度</h3>
                  <p className="text-sm text-gray-500">專業領域匹配度</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                候選人可透過排行榜快速找到專業度高、成效優異的獵頭合作，提高轉職效率。
              </p>
            </div>
          </div>

          {/* Top 10 排行榜 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Top 10 獵頭顧問</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {topHeadhunters.map((headhunter) => (
                <div
                  key={headhunter.id}
                  className={`p-6 flex items-center ${
                    headhunter.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-white' : ''
                  }`}
                >
                  {/* 排名 */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    {headhunter.rank <= 3 ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-400 text-white font-bold">
                        {headhunter.rank}
                      </div>
                    ) : (
                      <div className="text-gray-400 font-bold">{headhunter.rank}</div>
                    )}
                  </div>

                  {/* 头像 */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={headhunter.photo}
                        alt={headhunter.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* 信息 */}
                  <div className="ml-6 flex-grow">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">{headhunter.name}</h3>
                      <span className="ml-2 text-sm text-gray-500">{headhunter.title}</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>{headhunter.industry}</span>
                      <span className="mx-2">•</span>
                      <span>{headhunter.location}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${
                              star <= headhunter.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">({headhunter.rating})</span>
                    </div>
                  </div>

                  {/* 数据 */}
                  <div className="ml-6 text-right">
                    <div className="text-sm text-gray-900 font-medium">{headhunter.totalDeals}</div>
                    <div className="text-sm text-gray-500">{headhunter.successfulPlacements} 成功案例</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 付费解锁区域 */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
            <div className="relative bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  升級至 Premium 解鎖完整排行榜
                </h3>
                <p className="text-gray-600 mb-6">
                  查看更多獵頭，找到最適合你的合作對象
                </p>
                <button
                  onClick={handleUpgradeClick}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  立即升級
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 功能建設中彈窗 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">功能建設中</h3>
              <p className="text-gray-600 mb-6">
                升級功能正在開發中，歡迎聯繫我們了解更多資訊。
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleModalAction('close')}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  關閉
                </button>
                <Link
                  href="/contact?from=rankings"
                  onClick={() => handleModalAction('contact')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  聯繫我們
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 