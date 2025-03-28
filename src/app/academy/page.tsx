'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { FaSearch, FaTimes } from 'react-icons/fa';

type CourseLevel = '入門' | '進階' | '高級';
type CourseTag = CourseLevel | 'Premium';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: CourseLevel;
  duration: string;
  lessons: number;
  price: number;
  image: string;
  tags: CourseTag[];
}

export default function Academy() {
  const [selectedTag, setSelectedTag] = useState<CourseTag | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const courses: Course[] = [
    {
      id: '1',
      title: '獵頭入門：人才市場概述',
      description: '了解獵頭產業現況與發展趨勢',
      instructor: '王大明',
      level: '入門',
      duration: '2小時',
      lessons: 5,
      price: 0,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      tags: ['入門'],
    },
    {
      id: '2',
      title: '人才評估技巧進階',
      description: '深入了解人才評估方法與工具',
      instructor: '李小華',
      level: '進階',
      duration: '4小時',
      lessons: 8,
      price: 199,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      tags: ['進階', 'Premium'],
    },
    {
      id: '3',
      title: '高階人才獵聘策略',
      description: '高階人才開發與維護關係技巧',
      instructor: '張明德',
      level: '高級',
      duration: '6小時',
      lessons: 12,
      price: 299,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      tags: ['高級', 'Premium'],
    },
    {
      id: '4',
      title: '面試技巧與評估',
      description: '掌握專業的面試技巧和人才評估方法',
      instructor: '陳美玲',
      level: '入門',
      duration: '3小時',
      lessons: 6,
      price: 0,
      image: 'https://images.unsplash.com/photo-1560264280-88b68371db39',
      tags: ['入門'],
    },
    {
      id: '5',
      title: '企業客戶開發',
      description: '學習如何開發和維護企業客戶關係',
      instructor: '林志明',
      level: '進階',
      duration: '5小時',
      lessons: 10,
      price: 249,
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b',
      tags: ['進階', 'Premium'],
    },
    {
      id: '6',
      title: '獵頭產業趨勢分析',
      description: '深度解析獵頭產業未來發展方向',
      instructor: '黃雅芳',
      level: '高級',
      duration: '4小時',
      lessons: 8,
      price: 299,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tags: ['高級', 'Premium'],
    },
  ];

  const allTags: CourseTag[] = ['入門', '進階', '高級', 'Premium'];

  const filteredCourses = courses.filter((course) => {
    const matchesTag = selectedTag ? course.tags.includes(selectedTag) : true;
    const matchesSearch = searchQuery
      ? course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  const handleTagClick = (tag: CourseTag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const clearFilters = () => {
    setSelectedTag(null);
    setSearchQuery('');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                獵頭學院
              </h1>
              <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
                專業的獵頭培訓平台，幫助你成為頂尖獵頭顧問
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋課程..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
              {(selectedTag || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2"
                >
                  <FaTimes />
                  清除篩選
                </button>
              )}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          tag === 'Premium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span className="mr-4">👨‍🏫 {course.instructor}</span>
                    <span className="mr-4">⏱ {course.duration}</span>
                    <span>📚 {course.lessons} 課時</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">
                      {course.price === 0 ? '免費' : `NT$ ${course.price}`}
                    </span>
                    <Link
                      href={`/login?redirect=/academy/course/${course.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      {course.price === 0 ? '開始學習' : '立即購買'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              想了解更多課程？
            </h2>
            <p className="text-gray-600 mb-6">
              我們還有更多專業課程，歡迎聯繫我們了解詳情
            </p>
            <Link
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              聯繫我們
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 