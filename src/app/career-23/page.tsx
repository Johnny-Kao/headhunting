'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Career23Page() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                🚀 轉職不是靠運氣，是靠準備
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                從重新定位職涯目標，到成功接到 offer ——我們幫你盤點轉職路上的 23 件關鍵事情
              </p>
              <div className="mt-10">
                <Link
                  href="#form"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  👉 我要開始準備
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                為什麼需要「轉職的 23 件事情」
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 mb-6">
                  你準備換工作了，卻卡在：
                </p>
                <ul className="text-lg text-gray-600 space-y-4 mb-8">
                  <li>• 不知道從哪裡開始準備？</li>
                  <li>• 簡歷寫了十版還是不確定對不對？</li>
                  <li>• 面試時總覺得回答不到點？</li>
                  <li>• 想轉職卻還沒搞清楚「自己要什麼」？</li>
                </ul>
                <p className="text-lg text-gray-600">
                  我們設計了「轉職的 23 件事情」，幫你釐清從 開始準備 到 順利接到 offer 整個過程。
                  你只需要照著這份路線圖，逐步完成每一項準備，就能用系統性的方式踏實前進。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Stages Section */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                轉職的三個階段 × 23 件關鍵事情
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stage 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  🧩 第一階段：售前準備（Before Headhunter）
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• 釐清為何轉職＆想去哪裡</li>
                  <li>• 盤點技能與經驗</li>
                  <li>• 修改／客製化履歷</li>
                  <li>• 打造 LinkedIn 或個人品牌頁面</li>
                  <li>• 市場與技能調查</li>
                </ul>
              </div>

              {/* Stage 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  🧠 第二階段：技能升級與面試準備
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• 面試＆口試實戰練習</li>
                  <li>• 模擬常見情境題／履歷題</li>
                  <li>• 自我介紹與薪資談判策略</li>
                  <li>• 模擬面試、心理建設</li>
                </ul>
              </div>

              {/* Stage 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  🚀 第三階段：開始與市場接軌
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• 主動找職缺、認識獵頭</li>
                  <li>• 投遞追蹤與面試管理</li>
                  <li>• 解讀工作 JD 與契約條款</li>
                  <li>• 試用期計畫、新環境適應策略</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              你可以自己學，也可以讓我們幫你一步到位。
            </p>
          </div>
        </div>

        {/* Value Added Services */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                我們提供的加值服務
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                你也可以選擇我們的一對一專業輔導，由業界 HR 與職涯顧問為你量身打造以下服務：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-900">✅ 履歷健檢與修改</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-900">✅ 模擬面試實戰</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-900">✅ 一對一職涯諮詢</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-900">✅ 技能轉職地圖設計</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-900">✅ 其他客製服務</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="form" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                填寫表單，讓我們來協助你
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                現在就填寫職涯諮詢表單，讓我們了解你的狀況，安排後續服務說明。
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <form id="careerForm" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    電子信箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="currentJob" className="block text-sm font-medium text-gray-700">
                    目前職稱／產業
                  </label>
                  <select
                    name="currentJob"
                    id="currentJob"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">請選擇</option>
                    <option value="軟體工程師">軟體工程師</option>
                    <option value="UI/UX 設計師">UI/UX 設計師</option>
                    <option value="行銷企劃">行銷企劃</option>
                    <option value="產品經理">產品經理</option>
                    <option value="客服／營運">客服／營運</option>
                    <option value="財務／人資">財務／人資</option>
                    <option value="學生／應屆畢業生">學生／應屆畢業生</option>
                    <option value="其他">其他</option>
                  </select>
                </div>

                <div id="otherJobWrapper" className="hidden">
                  <label htmlFor="otherJob" className="block text-sm font-medium text-gray-700">
                    請輸入其他職稱／產業
                  </label>
                  <input
                    type="text"
                    name="otherJob"
                    id="otherJob"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="targetJob" className="block text-sm font-medium text-gray-700">
                    想轉職的方向
                  </label>
                  <select
                    name="targetJob"
                    id="targetJob"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">請選擇</option>
                    <option value="軟體工程師">軟體工程師</option>
                    <option value="產品經理">產品經理</option>
                    <option value="UI/UX 設計師">UI/UX 設計師</option>
                    <option value="資料分析師">資料分析師</option>
                    <option value="數位行銷">數位行銷</option>
                    <option value="創業／自由接案">創業／自由接案</option>
                    <option value="其他">其他</option>
                  </select>
                </div>

                <div id="otherTargetJobWrapper" className="hidden">
                  <label htmlFor="otherTargetJob" className="block text-sm font-medium text-gray-700">
                    請輸入其他轉職方向
                  </label>
                  <input
                    type="text"
                    name="otherTargetJob"
                    id="otherTargetJob"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    想了解的服務項目（多選）
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="履歷健檢與修改"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">履歷健檢與修改</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="模擬面試"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">模擬面試</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="一對一職涯策略諮詢"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">一對一職涯策略諮詢</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="技能轉職地圖設計"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">技能轉職地圖設計</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="其他"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">其他：</span>
                      <input
                        type="text"
                        name="otherService"
                        className="ml-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    送出
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const form = document.getElementById('careerForm');
              const jobSelect = document.getElementById('currentJob');
              const otherJobWrapper = document.getElementById('otherJobWrapper');
              const otherJobInput = document.getElementById('otherJob');
              const targetJobSelect = document.getElementById('targetJob');
              const otherTargetJobWrapper = document.getElementById('otherTargetJobWrapper');
              const otherTargetJobInput = document.getElementById('otherTargetJob');

              jobSelect.addEventListener('change', function() {
                if (jobSelect.value === '其他') {
                  otherJobWrapper.classList.remove('hidden');
                } else {
                  otherJobWrapper.classList.add('hidden');
                  otherJobInput.value = '';
                }
              });

              targetJobSelect.addEventListener('change', function() {
                if (targetJobSelect.value === '其他') {
                  otherTargetJobWrapper.classList.remove('hidden');
                } else {
                  otherTargetJobWrapper.classList.add('hidden');
                  otherTargetJobInput.value = '';
                }
              });

              form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(form);
                const services = formData.getAll('services');
                if (formData.get('otherService')) {
                  services.push(formData.get('otherService'));
                }

                const currentJob = jobSelect.value === '其他' ? otherJobInput.value : jobSelect.value;
                const targetJob = targetJobSelect.value === '其他' ? otherTargetJobInput.value : targetJobSelect.value;

                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  currentJob: currentJob,
                  targetJob: targetJob,
                  services: services.join(', ')
                };

                fetch('https://script.google.com/macros/s/AKfycbztuwkwOsTuiVNhOPqBoFmfw3Wse-FshgmV0DYNfyPvteSpJ4Seb4Q5e__ZsOaMQRx6/exec', {
                  method: 'POST',
                  mode: 'no-cors',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });

                alert('✅ 表單已送出，我們會盡快與您聯繫！');
                form.reset();
                otherJobWrapper.classList.add('hidden');
                otherTargetJobWrapper.classList.add('hidden');
              });
            `,
          }}
        />
      </div>
    </Layout>
  );
} 