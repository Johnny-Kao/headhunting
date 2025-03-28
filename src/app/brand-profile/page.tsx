'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function BrandProfile() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      href: '#',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="w-6 h-6" />,
      href: '#',
      color: 'bg-red-600',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="w-6 h-6" />,
      href: '#',
      color: 'bg-black',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      href: '#',
      color: 'bg-blue-600',
    },
  ];

  const features = [
    {
      title: '社群媒體整合',
      description: '連結你的 Instagram、YouTube、TikTok 等社群帳號',
      icon: '🔗',
    },
    {
      title: '作品集展示',
      description: '展示你的專業作品和成就',
      icon: '🎨',
    },
    {
      title: '商業服務推廣',
      description: '推廣你的商品、課程或顧問服務',
      icon: '💼',
    },
    {
      title: '客製化設計',
      description: '依據品牌調性打造專屬頁面',
      icon: '✨',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="px-4 py-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/placeholder-avatar.jpg"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Brand Info */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Your Brand Name</h1>
              <p className="text-gray-600 mb-4">讓每一個創意都有舞台</p>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                專業的品牌經營者，致力於幫助創作者展現獨特價值，建立個人品牌。
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center p-4 rounded-lg text-white ${link.color} w-full`}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/login"
                className="block w-full text-center bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                建立我的品牌頁
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative h-[500px]">
                <Image
                  src="/images/placeholder-hero.jpg"
                  alt="Brand Hero"
                  width={800}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h1 className="text-4xl font-bold mb-4">打造你的專屬品牌頁面</h1>
                <p className="text-xl text-gray-600 mb-6">
                  展現專業，連結粉絲，建立個人品牌
                </p>
                <p className="text-gray-500 mb-8">
                  無論你是創作者、自由工作者還是企業主，都能透過專業的品牌頁面，
                  展現獨特價值，吸引目標客群。
                </p>
                <Link
                  href="/login"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  開始建立品牌頁
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                你可以這樣展示自己
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-8">準備好打造你的品牌頁了嗎？</h2>
              <Link
                href="/signup"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                免費註冊開通 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 