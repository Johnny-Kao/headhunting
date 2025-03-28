'use client';

import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">准备好开始了吗？</span>
          <span className="block">加入 HeadhunterHub 社区</span>
        </h2>
        <p className="mt-6 text-xl leading-6 text-blue-100">
          无论您是经验丰富的猎头还是正在寻找机会的候选人，我们都能帮助您实现职业目标。
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
          >
            立即注册
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
} 