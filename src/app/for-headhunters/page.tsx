'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

// 模拟功能数据
const features = [
  {
    title: '建立个人品牌',
    description: '创建专业的个人主页，展示您的专业能力和成功案例。',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: '拓展客户资源',
    description: '连接优质企业客户，获取更多招聘需求。',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: '提升专业技能',
    description: '获取行业最新资讯，参与专业培训课程。',
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

// 模拟会员计划数据
const plans = [
  {
    name: '基础版',
    price: '免费',
    features: [
      '基础个人主页',
      '每月10次简历查看',
      '基础客户联系',
      '社区访问权限',
    ],
    cta: '开始使用',
    popular: false,
  },
  {
    name: '专业版',
    price: '¥299/月',
    features: [
      '高级个人主页',
      '无限简历查看',
      '优先客户推荐',
      '专业课程访问',
      '专属客服支持',
      '数据分析报告',
    ],
    cta: '升级专业版',
    popular: true,
  },
  {
    name: '企业版',
    price: '联系我们',
    features: [
      '团队管理功能',
      'API接口访问',
      '定制化解决方案',
      '专属客户经理',
      '高级数据分析',
      '企业培训服务',
    ],
    cta: '联系销售',
    popular: false,
  },
];

export default function ForHeadhuntersPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-blue-600">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                加入 HeadhunterHub
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                打造您的个人品牌，拓展客户资源，提升专业技能，成为行业顶尖猎头顾问。
              </p>
              <div className="mt-10">
                <Link
                  href="/signup"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  立即注册
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                为什么选择 HeadhunterHub？
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                我们提供全方位的服务，助力您的职业发展
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                选择适合您的会员计划
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                我们提供灵活的会员方案，满足不同阶段的需求
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-y-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        最受欢迎
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="mt-4 text-3xl font-extrabold text-gray-900">
                      {plan.price}
                    </p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <button
                        type="button"
                        className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md ${
                          plan.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">准备好开始了吗？</span>
              <span className="block text-blue-600">
                加入我们，开启您的职业新篇章
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  立即注册
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 