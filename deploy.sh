#!/bin/bash

# 停止現有容器
docker-compose down

# 拉取最新代碼
git pull

# 構建並啟動新容器
docker-compose up --build -d

# 顯示日誌
docker-compose logs -f 