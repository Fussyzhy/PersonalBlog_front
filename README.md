# 🌟 个人博客系统 - 前端部分

## 📝 项目介绍

这是一个使用Vue3和Element Plus构建的现代化个人博客系统前端部分，提供了文章展示、用户登录注册、个人作品集等功能，界面美观，交互友好。

## ⚙️ 技术栈

- **Vue 3**: 渐进式JavaScript框架
- **TypeScript**: 类型安全的JavaScript超集
- **Vue Router**: Vue.js官方路由管理器
- **Pinia**: Vue.js的状态管理库，支持持久化存储
- **Element Plus**: 基于Vue 3的组件库
- **Axios**: 基于Promise的HTTP客户端
- **Sass**: CSS预处理器
- **Vite**: 现代前端构建工具

## ✨ 功能特点

- 📱 响应式设计，适配多种设备屏幕
- 🔐 用户认证系统（登录、注册、密码修改）
- 📰 文章列表与详情页展示
- 🎨 个人作品集展示
- 👤 个人主页与简介
- 💾 持久化的用户登录状态

## 📂 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── api/            # API接口
│   ├── assets/         # 资源文件
│   ├── components/     # 公共组件
│   ├── router/         # 路由配置
│   ├── stores/         # 状态管理
│   ├── utils/          # 工具函数
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── main.ts         # 入口文件
├── .editorconfig       # 编辑器配置
├── .gitignore          # Git忽略文件
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 🚀 安装与运行

### 📋 前置条件

- Node.js (推荐v16.0.0以上)
- Yarn 或 npm

### 📦 安装依赖

```bash
# 使用Yarn
yarn install

# 或使用npm
npm install
```

### 🔧 开发模式运行

```bash
# 使用Yarn
yarn dev

# 或使用npm
npm run dev
```

应用将在 http://localhost:7456 启动（端口可在vite.config.ts中配置）

### 📦 构建生产版本

```bash
# 使用Yarn
yarn build

# 或使用npm
npm run build
```

## 🔌 后端API

本项目需要配合后端API使用，默认API地址为`http://127.0.0.1:5161`，可在`src/utils/request.ts`中修改。

## 👥 贡献指南

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个Pull Request

## 📄 许可证

[MIT](LICENSE)