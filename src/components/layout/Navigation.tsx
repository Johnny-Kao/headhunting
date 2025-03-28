'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
  };

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const navItems = [
    {
      name: '求職者',
      href: '#',
      dropdown: [
        {
          name: '尋找獵頭',
          href: '/find-headhunter',
        },
        {
          name: '獵頭排行榜',
          href: '/rankings',
        },
        {
          name: '求職諮詢',
          href: '/career-23',
        },
      ],
    },
    {
      name: '獵頭中心',
      href: '#',
      dropdown: [
        {
          name: '品牌個人頁',
          href: '/brand-profile',
        },
        {
          name: '獵頭學院',
          href: '/academy',
        },
        {
          name: '成為獵頭',
          href: '/become-headhunter',
        },
      ],
    },
    {
      name: '團隊介紹',
      href: '/team',
    },
    {
      name: '聯絡我們',
      href: '/contact',
    },
  ];

  const footerLinks = [
    {
      name: '團隊介紹',
      href: '/team',
    },
    {
      name: '新聞 / 新知',
      href: '/news',
    },
    {
      name: '團隊介紹',
      href: '/team',
    },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ヒトコネ
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium ${
                          pathname.startsWith(item.href) ? 'text-blue-600' : ''
                        }`}
                      >
                        {item.name}
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          onMouseEnter={() => handleMouseEnter(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="py-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-4 py-2 text-sm ${
                                  pathname === dropdownItem.href
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium ${
                        pathname === item.href ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {user ? (
                <>
                  <span className="text-gray-700 text-sm">{user.name}</span>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    登出
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium ${
                      pathname === '/login' ? 'text-blue-600' : ''
                    }`}
                  >
                    登入
                  </Link>
                  <button
                    onClick={handleSignupClick}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    註冊
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">打開主選單</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(item.name)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                      <svg
                        className={`inline-block ml-1 h-4 w-4 ${
                          activeDropdown === item.name ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-3 py-2 text-base font-medium ${
                              pathname === dropdownItem.href
                                ? 'text-blue-600'
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      pathname === item.href
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {!user && (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  登入
                </Link>
                <button
                  onClick={handleSignupClick}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  註冊
                </button>
              </>
            )}
            {user && (
              <>
                <div className="px-3 py-2 text-base font-medium text-gray-700">
                  {user.name}
                </div>
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  登出
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* 功能建設中彈窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">功能建設中</h3>
            <p className="text-gray-600 mb-6">
              註冊功能正在開發中，歡迎聯繫我們了解更多資訊。
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                關閉
              </button>
              <Link
                href="/contact?from=signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                聯繫我們
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 