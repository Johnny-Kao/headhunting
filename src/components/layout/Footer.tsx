'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">關於我們</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  公司介紹
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  聯繫我們
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">服務項目</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/find-headhunter" className="text-base text-gray-500 hover:text-gray-900">
                  尋找獵頭
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-base text-gray-500 hover:text-gray-900">
                  獵頭排行表
                </Link>
              </li>
              <li>
                <Link href="/career-23" className="text-base text-gray-500 hover:text-gray-900">
                  轉職的23件事
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">社群媒體</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://linkedin.johnnykao.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  領英主頁
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">聯繫方式</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                Email: contact@hitokone.com
              </li>
              <li className="text-base text-gray-500">
                Tel: +81 3-1234-5678
              </li>
              <li className="text-base text-gray-500">
                地址: 東京都渋谷区神宮前1-1-1
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 ヒトコネ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 