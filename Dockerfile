# 使用 Node.js 18 作為基礎映像
FROM node:18-alpine AS base

# 安裝依賴階段
FROM base AS deps
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm ci

# 構建階段
FROM base AS builder
WORKDIR /app

# 複製依賴
COPY --from=deps /app/node_modules ./node_modules

# 複製源代碼
COPY . .

# 設置環境變量
ENV NEXT_TELEMETRY_DISABLED 1

# 構建應用
RUN npm run build

# 生產階段
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 設置正確的權限
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 自動利用輸出跟踪複製獨立服務器文件
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 