# HeadhunterHub

HeadhunterHub 是一个连接猎头和候选人的专业平台。我们致力于为猎头提供展示专业能力、扩展人脉网络和获取培训的机会，同时帮助候选人找到最适合的猎头顾问。

## 主要功能

- 猎头个人品牌展示
- 候选人搜索和联系
- 猎头社区交流
- 专业培训课程（Premium）
- 猎头与候选人直接沟通

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- MongoDB (计划中)

## 开发环境设置

1. 安装依赖：
```bash
npm install
```

2. 运行开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 项目结构

```
src/
├── app/              # 页面路由
├── components/       # 可复用组件
├── lib/             # 工具函数和配置
├── styles/          # 全局样式
└── types/           # TypeScript 类型定义
```

## 贡献指南

欢迎提交 Pull Request 或创建 Issue。

## 许可证

MIT 

# Headhunter 網站部署指南

## 系統要求
- Node.js 18 或更高版本
- Docker
- Docker Compose
- Git

## 部署步驟

1. 克隆代碼庫：
```bash
git clone https://github.com/Johnny-Kao/headhunting.git
cd headhunting
```

2. 安裝依賴：
```bash
npm install
```

3. 設置環境變量：
```bash
cp .env.example .env
```
然後編輯 .env 文件，填入實際的環境變量值：
- JWT_SECRET：用於 JWT 加密的密鑰
- GOOGLE_ANALYTICS_ID：Google Analytics 追蹤 ID
- MICROSOFT_CLARITY_ID：Microsoft Clarity 追蹤 ID

4. 本地開發：
```bash
npm run dev
```
訪問 http://localhost:3000 查看網站

5. 生產環境部署：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 維護命令

- 查看日誌：
```bash
docker-compose logs -f
```

- 重啟服務：
```bash
docker-compose restart
```

- 停止服務：
```bash
docker-compose down
```

## 注意事項
- 確保服務器防火牆開放 3000 端口
- 建議使用 Nginx 作為反向代理
- 定期備份數據
- 監控服務器資源使用情況

## 常見問題排解

如果遇到依賴相關的錯誤：
1. 刪除 node_modules 目錄
2. 刪除 package-lock.json 文件
3. 重新運行 npm install

如果遇到構建錯誤：
1. 清除 .next 目錄
2. 重新運行 npm run build 