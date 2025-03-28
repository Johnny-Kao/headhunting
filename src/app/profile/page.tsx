'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import type { UpdateProfileData } from '@/types/auth';

export default function ProfilePage() {
  const { user, updateProfile, error, isLoading } = useAuth();
  const [formData, setFormData] = useState<UpdateProfileData>({
    avatar: user?.avatar || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    company: user?.company || '',
    position: user?.position || '',
    experience: user?.experience || 0,
    specialties: user?.specialties || '',
    achievements: user?.achievements || '',
    education: user?.education || '',
    skills: user?.skills || '',
    workHistory: user?.workHistory || '',
    expectedSalary: user?.expectedSalary || 0,
    jobPreferences: user?.jobPreferences || '',
    wechat: user?.wechat || '',
    linkedin: user?.linkedin || '',
    website: user?.website || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        avatar: user.avatar || '',
        phone: user.phone || '',
        location: user.location || '',
        bio: user.bio || '',
        company: user.company || '',
        position: user.position || '',
        experience: user.experience || 0,
        specialties: user.specialties || '',
        achievements: user.achievements || '',
        education: user.education || '',
        skills: user.skills || '',
        workHistory: user.workHistory || '',
        expectedSalary: user.expectedSalary || 0,
        jobPreferences: user.jobPreferences || '',
        wechat: user.wechat || '',
        linkedin: user.linkedin || '',
        website: user.website || '',
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
    } catch (error) {
      console.error('更新用户资料失败:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  个人资料
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>更新您的个人资料信息。</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-5 space-y-6">
                  {error && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="text-sm text-red-700">{error}</div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                      头像 URL
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="avatar"
                        id="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      手机号码
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      所在地
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                      个人简介
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="bio"
                        id="bio"
                        rows={3}
                        value={formData.bio}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  {user.userType === 'headhunter' && (
                    <>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                          公司名称
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                          职位
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="position"
                            id="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                          从业年限
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name="experience"
                            id="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="specialties" className="block text-sm font-medium text-gray-700">
                          专长领域
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="specialties"
                            id="specialties"
                            value={formData.specialties}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="achievements" className="block text-sm font-medium text-gray-700">
                          成就
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="achievements"
                            id="achievements"
                            rows={3}
                            value={formData.achievements}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {user.userType === 'candidate' && (
                    <>
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                          教育背景
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="education"
                            id="education"
                            rows={3}
                            value={formData.education}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                          技能
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="skills"
                            id="skills"
                            rows={3}
                            value={formData.skills}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="workHistory" className="block text-sm font-medium text-gray-700">
                          工作经历
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="workHistory"
                            id="workHistory"
                            rows={3}
                            value={formData.workHistory}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700">
                          期望薪资
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name="expectedSalary"
                            id="expectedSalary"
                            value={formData.expectedSalary}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="jobPreferences" className="block text-sm font-medium text-gray-700">
                          求职偏好
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="jobPreferences"
                            id="jobPreferences"
                            rows={3}
                            value={formData.jobPreferences}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label htmlFor="wechat" className="block text-sm font-medium text-gray-700">
                      微信号
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="wechat"
                        id="wechat"
                        value={formData.wechat}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                      LinkedIn 链接
                    </label>
                    <div className="mt-1">
                      <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      个人网站
                    </label>
                    <div className="mt-1">
                      <input
                        type="url"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? '保存中...' : '保存'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 