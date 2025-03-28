'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

// 模拟课程数据
const course = {
  id: '1',
  title: '猎头基础入门',
  description: '了解猎头行业的基本概念、工作流程和必备技能。',
  instructor: '张明',
  level: '入门',
  duration: '4小时',
  lessons: 12,
  price: '免费',
  image: '/images/courses/basic.jpg',
  isPremium: false,
  chapters: [
    {
      id: '1',
      title: '第一章：猎头行业概述',
      lessons: [
        {
          id: '1-1',
          title: '1.1 什么是猎头？',
          duration: '15分钟',
          isPreview: true,
        },
        {
          id: '1-2',
          title: '1.2 猎头行业的发展历程',
          duration: '20分钟',
          isPreview: true,
        },
        {
          id: '1-3',
          title: '1.3 猎头顾问的角色定位',
          duration: '25分钟',
          isPreview: false,
        },
      ],
    },
    {
      id: '2',
      title: '第二章：猎头工作流程',
      lessons: [
        {
          id: '2-1',
          title: '2.1 需求分析',
          duration: '30分钟',
          isPreview: false,
        },
        {
          id: '2-2',
          title: '2.2 人才寻访',
          duration: '35分钟',
          isPreview: false,
        },
        {
          id: '2-3',
          title: '2.3 候选人评估',
          duration: '40分钟',
          isPreview: false,
        },
      ],
    },
  ],
};

export default function CourseDetailPage() {
  const [selectedLesson, setSelectedLesson] = useState(course.chapters[0].lessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Layout>
      <div className="bg-white">
        {/* 课程头部信息 */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white">{course.title}</h1>
                <p className="mt-2 text-blue-100">{course.description}</p>
                <div className="mt-4 flex items-center text-sm text-blue-100">
                  <span>讲师：{course.instructor}</span>
                  <span className="mx-2">·</span>
                  <span>难度：{course.level}</span>
                  <span className="mx-2">·</span>
                  <span>时长：{course.duration}</span>
                  <span className="mx-2">·</span>
                  <span>课时：{course.lessons}课时</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-2xl font-bold text-white">{course.price}</span>
                <button
                  type="button"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  {course.isPremium ? '立即购买' : '开始学习'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 视频播放区域 */}
            <div className="lg:w-3/4">
              <div className="bg-black rounded-lg aspect-video">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="mt-2">视频播放区域</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedLesson.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  时长：{selectedLesson.duration}
                </p>
              </div>
            </div>

            {/* 课程目录 */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">课程目录</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {course.chapters.map((chapter) => (
                    <div key={chapter.id} className="p-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        {chapter.title}
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {chapter.lessons.map((lesson) => (
                          <li key={lesson.id}>
                            <button
                              onClick={() => setSelectedLesson(lesson)}
                              className={`w-full text-left px-3 py-2 text-sm rounded-md ${
                                selectedLesson.id === lesson.id
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{lesson.title}</span>
                                <span className="text-xs text-gray-500">
                                  {lesson.duration}
                                </span>
                              </div>
                              {lesson.isPreview && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                  可预览
                                </span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 