# 使用 Node.js 作为基础镜像
FROM node:20-slim

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 到工作目录
# COPY package.json yarn.lock ./

# 将项目文件复制到工作目录
COPY . .

RUN yarn config set registry https://registry.npm.taobao.org && yarn config set disturl https://npm.taobao.org/dist && yarn install

RUN yarn build

RUN npm install -g http-server 
# 安装项目依赖


# 构建生产环境的 React 应用
# RUN yarn build

# 暴露容器的端口，根据您的 React 项目配置来设置
# EXPOSE 3000

# 运行 React 应用
# CMD ["yarn", "start"]

