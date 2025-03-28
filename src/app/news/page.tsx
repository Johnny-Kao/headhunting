'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const news = [
  {
    id: '1',
    title: '公司荣获"年度最佳猎头服务商"称号',
    date: '2024-03-15',
    category: '公司新闻',
    excerpt: '在2024年度猎头行业峰会上，我司凭借优质的服务和创新的技术平台，从众多参选企业中脱颖而出...',
    image: '/images/news/award.jpg',
  },
  {
    id: '2',
    title: '成功举办2024年人才发展论坛',
    date: '2024-03-10',
    category: '活动新闻',
    excerpt: '本次论坛汇聚了行业精英，共同探讨人才发展趋势和招聘创新方案...',
    image: '/images/news/forum.jpg',
  },
  {
    id: '3',
    title: '发布最新人才市场分析报告',
    date: '2024-03-05',
    category: '研究报告',
    excerpt: '报告深入分析了当前人才市场趋势，为企业和求职者提供决策参考...',
    image: '/images/news/report.jpg',
  },
];

export default function NewsPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              新闻动态
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              了解我们的最新动态和行业资讯
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">新闻图片占位</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.excerpt}</p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-500">
                    阅读更多
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              查看更多新闻
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
} 