'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Johnny Kao',
      title: '創業者 & CEO',
      photo: 'https://media.licdn.com/dms/image/v2/D5603AQHVNcSuXMf__Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724595828840?e=1748476800&v=beta&t=1_m0In3r5Dkqe8cwvFPjEZ4OWiRjQ-g85Xd_KcItwzg',
      description: 'ヘッドハンティング業界に強い関心を持つ。金融機関やフィンテック企業向けのデジタルトランスフォーメーション、戦略的コンサルティング、AI導入に経験があって、ステークホルダーを巻き込み、戦略的イニシアチブを推進し、複雑な課題を乗り越える実証済みの能力があります。'
    },
    {
      id: 2,
      name: '鈴木花子',
      title: 'COO',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      description: '会社全体の運営戦略を担当し、豊富なインターネットプラットフォーム運営経験を持つ。'
    },
    {
      id: 3,
      name: '佐藤健一',
      title: 'CTO',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
      description: '技術チームを率いて革新的な人材マッチングシステムを開発し、ユーザー体験の向上に注力。'
    },
    {
      id: 4,
      name: '中村美咲',
      title: 'CPO',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      description: '製品企画とユーザー体験設計を担当し、最高の人材サービスプラットフォームの構築に専念。'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* 页面标题 */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">チーム紹介</h1>
            <p className="mt-4 text-lg text-gray-600">
              私たちの専門チームをご紹介
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 公司介紹 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">会社概要</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                私たちは、ハイエンド人材紹介に特化したテクノロジー企業として、企業と人材の最適なマッチングプラットフォームの構築に取り組んでいます。
              </p>
              <p className="text-gray-600">
                先進的なAI技術と専門的なヘッドハンターチームを活用し、クライアントに正確な人材マッチングサービスを提供。
                企業が最適な人材を見つけ、優秀な人材が理想的なキャリア機会を見つけることをサポートします。
              </p>
              <p className="text-gray-600">
                私たちのミッション：すべての人が最適な仕事を見つけ、すべての企業が最優秀な人材を見つけられるようにする。
              </p>
            </div>
          </div>

          {/* 團隊成員 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">コアチーム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="relative">
                    <img
                      className="mx-auto h-32 w-32 rounded-full"
                      src={member.photo}
                      alt={member.name}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-blue-600">{member.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 