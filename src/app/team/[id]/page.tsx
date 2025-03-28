'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

// 模拟团队成员数据
const teamMember = {
  id: '1',
  name: '张明',
  role: '创始人 & CEO',
  avatar: '/images/team/ceo.jpg',
  joinDate: '2020-01-01',
  bio: `
    张明先生拥有15年猎头行业经验，曾服务于多家世界500强企业。在创立公司之前，
    他曾在德科集团担任高级顾问，为众多知名企业提供人才解决方案。

    他致力于通过技术创新推动猎头行业的发展，带领团队开发了智能匹配算法，
    显著提升了人才匹配的效率和准确性。在他的带领下，公司已成为行业内
    最具创新力的企业之一。
  `,
  skills: ['战略规划', '团队管理', '技术创新', '行业洞察'],
  experience: [
    {
      company: '德科集团',
      position: '高级顾问',
      period: '2015-2020',
      description: '负责高端人才招聘和团队建设，服务过多个世界500强企业。',
    },
    {
      company: '光辉国际',
      position: '猎头顾问',
      period: '2010-2015',
      description: '专注于IT和互联网领域的人才招聘，建立了广泛的人才网络。',
    },
  ],
  contact: {
    email: 'zhang.ming@example.com',
    linkedin: 'https://linkedin.com/in/zhangming',
    wechat: 'zhangming2024',
  },
};

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 成员头像和基本信息 */}
          <div className="text-center mb-12">
            <div className="relative h-48 w-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">头像占位</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{teamMember.name}</h1>
            <p className="text-xl text-blue-600 mt-2">{teamMember.role}</p>
            <p className="text-gray-500 mt-1">加入时间：{teamMember.joinDate}</p>
          </div>

          {/* 个人简介 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">个人简介</h2>
            <div className="prose max-w-none">
              {teamMember.bio.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* 专业领域 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">专业领域</h2>
            <div className="flex flex-wrap gap-2">
              {teamMember.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 工作经历 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">工作经历</h2>
            <div className="space-y-8">
              {teamMember.experience.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" />
                  <div className="relative">
                    <h3 className="text-lg font-medium text-gray-900">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600">{exp.position}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                    <p className="mt-2 text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系方式</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-gray-500 w-20">邮箱：</span>
                <a
                  href={`mailto:${teamMember.contact.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {teamMember.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-20">LinkedIn：</span>
                <a
                  href={teamMember.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  查看主页
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-20">微信：</span>
                <span className="text-gray-900">{teamMember.contact.wechat}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 