'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { FaUserTie, FaTools, FaGraduationCap, FaRocket } from 'react-icons/fa';

export default function BecomeHeadhunter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    industry: '',
    message: '',
  });
  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
    screenResolution: '',
    timezone: '',
    deviceType: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: '一對一教練指導',
      description: '專業教練提供個人化指導，包含面試技巧演練和實戰經驗分享',
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: '資源建置教學',
      description: '學習如何尋找合適人才、撰寫專業 Job Description 和建立人才庫',
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: '獵頭實務課程',
      description: '系統性學習獵頭實務知識，從基礎到進階的完整課程規劃',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: '初入門輔助',
      description: '提供完整工具包和線上問答支援，協助你順利起步',
    },
  ];

  useEffect(() => {
    // 收集設備信息
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      deviceType: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop'
    };
    setDeviceInfo(info);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxn3bRzgvFRPPLFN6xecYUfOdMhXwYgUqH69tKOGKxnZbwaBNf4IF5HX6y0JQRStA2s/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit',
          page: 'become-headhunter',
          timestamp: new Date().toISOString(),
          ...formData,
          deviceInfo
        })
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        experience: '',
        industry: '',
        message: ''
      });
    } catch (err) {
      console.error('提交數據時發生錯誤:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalAction = async (action: 'close' | 'contact') => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxn3bRzgvFRPPLFN6xecYUfOdMhXwYgUqH69tKOGKxnZbwaBNf4IF5HX6y0JQRStA2s/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          page: 'become-headhunter',
          timestamp: new Date().toISOString(),
        })
      });
    } catch (err) {
      console.error('提交數據時發生錯誤:', err);
    }
    setShowModal(false);
  };

  if (submitStatus === 'success') {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                感謝您的聯繫！
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                我們已收到您的資訊，會有專人與您聯繫。
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  返回
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                想成為獵頭？我們帶你啟程
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                獵頭學院幫助你從零開始，進入高薪人才尋訪產業
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                我要加入獵頭學習計畫
              </h2>
              <p className="text-gray-600">
                填寫以下表單，我們會有專人為您規劃最適合的學習路徑
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  姓名
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  電子郵件
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  手機號碼
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  目前公司
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  工作經驗
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">請選擇</option>
                  <option value="1-3">1-3年</option>
                  <option value="3-5">3-5年</option>
                  <option value="5-10">5-10年</option>
                  <option value="10+">10年以上</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700"
                >
                  目前從事產業（選填）
                </label>
                <input
                  type="text"
                  name="industry"
                  id="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  想了解什麼內容？
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? '提交中...' : '提交申請'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        申請已成功提交！我們會盡快與您聯繫。
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        提交失敗，請稍後重試。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 功能建設中彈窗 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">功能建設中</h3>
              <p className="text-gray-600 mb-6">
                聯繫功能正在開發中，歡迎稍後再試。
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleModalAction('close')}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  關閉
                </button>
                <Link
                  href="/contact?from=become-headhunter"
                  onClick={() => handleModalAction('contact')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  聯繫我們
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 