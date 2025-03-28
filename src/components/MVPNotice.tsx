'use client';

import React, { useState } from 'react';

export default function MVPNotice() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* 半透明背景 */}
      <div className="fixed inset-0 bg-black bg-opacity-50 animate-fadeIn" />
      
      {/* 內容區域 */}
      <div className="relative bg-white rounded-lg p-8 max-w-2xl mx-4 shadow-xl animate-slideIn">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          MVP バージョンについて
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            このウェブサイトは現在MVP（最小実行可能製品）バージョンです。
            ユーザーの関心ポイントを追跡し、改善点を特定することを目的としています。
          </p>
          <p>
            表示されている内容は、まだ詳細な確認が行われていない場合があります。
            ご理解の上、ご利用いただけますようお願いいたします。
          </p>
        </div>
        <button
          onClick={handleClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          確認しました
        </button>
      </div>
    </div>
  );
} 