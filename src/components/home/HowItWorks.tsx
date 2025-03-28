'use client';

import React from 'react';

const steps = [
  {
    id: 1,
    name: '注册账号',
    description: '选择您的身份（猎头或候选人），创建个人账号。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: '完善资料',
    description: '填写个人资料，展示您的专业背景和需求。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: '开始连接',
    description: '浏览猎头/候选人，建立联系，开启合作。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">使用流程</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            简单三步，开启您的职业发展之旅
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            无论您是猎头还是候选人，我们都能帮助您快速找到合适的合作伙伴。
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {step.icon}
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{step.description}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 