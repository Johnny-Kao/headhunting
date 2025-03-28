'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

// 模拟数据
const industries = [
  '科技業',
  '金融業',
  '醫療業',
  '製造業',
  '服務業',
  '教育業',
  '零售業',
  '其他'
];

const cities = [
  '東京',
  '大阪',
  '名古屋',
  '福岡',
  '札幌',
  '神戶',
  '京都',
  '橫濱',
  '仙台',
  '廣島'
];

const headhunters = [
  {
    id: 1,
    name: '山田太郎',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    title: '資深獵頭顧問',
    company: 'Global Talent Solutions',
    experience: '8年',
    rating: 4.8,
    reviews: 156,
    specialties: ['科技業', '金融業'],
    cities: ['東京', '大阪'],
    description: '專注於科技和金融領域的高端人才獵頭，擁有豐富的跨國企業合作經驗。擅長為企業尋找技術領導者和金融專家。',
    contactUrl: '/contact/1',
    profileUrl: '/headhunter/1'
  },
  {
    id: 2,
    name: '鈴木花子',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    title: '資深獵頭顧問',
    company: 'Career Bridge Japan',
    experience: '6年',
    rating: 4.9,
    reviews: 142,
    specialties: ['醫療業', '生物科技'],
    cities: ['東京', '京都'],
    description: '醫療和生物科技領域的專業獵頭，與多家知名醫療機構和生物科技公司有長期合作。',
    contactUrl: '/contact/2',
    profileUrl: '/headhunter/2'
  },
  {
    id: 3,
    name: '佐藤健一',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    title: '資深獵頭顧問',
    company: 'Executive Search Japan',
    experience: '10年',
    rating: 4.7,
    reviews: 189,
    specialties: ['製造業', '汽車業'],
    cities: ['名古屋', '東京'],
    description: '製造業和汽車業的資深獵頭，特別擅長尋找工程師和技術專家。',
    contactUrl: '/contact/3',
    profileUrl: '/headhunter/3'
  },
  {
    id: 4,
    name: '中村美咲',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    title: '資深獵頭顧問',
    company: 'Tech Talent Japan',
    experience: '7年',
    rating: 4.8,
    reviews: 167,
    specialties: ['科技業', '互聯網'],
    cities: ['東京', '福岡'],
    description: '專注於科技和互聯網行業的人才獵頭，特別擅長尋找軟件工程師和產品經理。',
    contactUrl: '/contact/4',
    profileUrl: '/headhunter/4'
  },
  {
    id: 5,
    name: '木村拓也',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    title: '資深獵頭顧問',
    company: 'Finance Career Japan',
    experience: '9年',
    rating: 4.9,
    reviews: 178,
    specialties: ['金融業', '投資業'],
    cities: ['東京', '大阪'],
    description: '金融和投資領域的專業獵頭，與多家國際金融機構有合作關係。',
    contactUrl: '/contact/5',
    profileUrl: '/headhunter/5'
  }
];

export default function SearchPage() {
  const { user } = useAuth();
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredHeadhunters, setFilteredHeadhunters] = useState(headhunters);

  const handleFilter = () => {
    let filtered = [...headhunters];
    
    if (selectedIndustry) {
      filtered = filtered.filter(h => h.specialties.includes(selectedIndustry));
    }
    
    if (selectedCity) {
      filtered = filtered.filter(h => h.cities.includes(selectedCity));
    }
    
    setFilteredHeadhunters(filtered);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 搜索区域 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">尋找獵頭</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  產業領域
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">全部產業</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  地區
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">全部地區</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleFilter}
              className="mt-6 w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              搜尋
            </button>
          </div>

          {/* 猎头列表 */}
          <div className="space-y-6">
            {filteredHeadhunters.map((headhunter) => (
              <div key={headhunter.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={headhunter.avatar}
                    alt={headhunter.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{headhunter.name}</h3>
                        <p className="text-gray-600">{headhunter.title}</p>
                        <p className="text-gray-500">{headhunter.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1 text-gray-700">{headhunter.rating}</span>
                          <span className="ml-2 text-gray-500">({headhunter.reviews} 評價)</span>
                        </div>
                        <p className="text-gray-600">{headhunter.experience} 年經驗</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700">{headhunter.description}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {headhunter.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {headhunter.cities.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center space-x-4">
                      <Link
                        href={headhunter.contactUrl}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        聯繫獵頭
                      </Link>
                      {user && (
                        <div className="flex space-x-4">
                          <Link
                            href={`${headhunter.profileUrl}/desktop`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            電腦版形象網頁
                          </Link>
                          <Link
                            href={`${headhunter.profileUrl}/mobile`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            手機版形象網頁
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}