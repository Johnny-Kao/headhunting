'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// 模拟新闻数据
const news = {
  id: '1',
  title: '公司荣获"年度最佳猎头服务商"称号',
  category: '公司新闻',
  date: '2024-03-15',
  coverImage: '/images/news/cover.jpg',
  content: `
    近日，在2024年度猎头行业峰会上，我司凭借优质的服务和创新的技术平台，
    从众多参选企业中脱颖而出，荣获"年度最佳猎头服务商"称号。

    这一荣誉是对我们过去一年工作的肯定，也是对我们未来发展的激励。我们将继续
    秉持"专业、创新、共赢"的理念，为企业和求职者提供更优质的服务。

    在颁奖典礼上，我们的CEO张明表示："这个奖项不仅是对我们团队的认可，更是
    对我们服务理念的肯定。我们将继续努力，推动猎头行业的创新发展。"
  `,
  relatedNews: [
    {
      id: '2',
      title: '成功举办2024年人才发展论坛',
      date: '2024-03-10',
      image: '/images/news/forum.jpg',
    },
    {
      id: '3',
      title: '发布最新人才市场分析报告',
      date: '2024-03-05',
      image: '/images/news/report.jpg',
    },
  ],
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 新闻标题和元信息 */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {news.category}
              </span>
              <span className="text-gray-500">{news.date}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{news.title}</h1>
          </div>

          {/* 新闻封面图 */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">封面图片占位</span>
            </div>
          </div>

          {/* 新闻内容 */}
          <div className="prose max-w-none mb-12">
            {news.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 相关新闻 */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关新闻</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.relatedNews.map((item) => (
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
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.date}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* 分享按钮 */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">分享到</h3>
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                微信
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                微博
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 