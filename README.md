# AI Offer Miner

AI Offer Miner 是一个智能化的求职助手，根据求职者的简历和求职意向，基于人工智能技术，为应聘者生成求职简历。

## ✨ 主要功能

📝 **简历生成器**

- 🎯 内容优化
  - AI 驱动的专业内容润色
  - 关键词智能优化
  - 成就数据量化
  - 个性化亮点提炼

- 🎨 智能排版
  - 200+ 精选模板
  - 拖拽式编辑器
  - 多终端适配
  - LaTeX 支持

## 🛠️ 技术栈

本项目采用现代全栈开发技术：

- [Next.js](https://nextjs.org) - React 框架，用于构建高性能的 Web 应用
- [NextAuth.js](https://next-auth.js.org) - 完整的身份认证解决方案
- [Prisma](https://prisma.io) - 下一代 ORM，简化数据库操作
- [Drizzle](https://orm.drizzle.team) - 轻量级 SQL ORM
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- [tRPC](https://trpc.io) - 端到端类型安全的 API 开发

## 🚀 快速开始

### 环境要求

- Node.js 16+ 
- pnpm
- PostgreSQL

### 🤝 参与贡献

1. 克隆仓库
```bash
git clone git@github.com:WebJeffery/ai-offer-miner.git
```

2. 安装依赖
```bash
pnpm install
```

3. 初始化数据库
```bash
pnpm db:push
```

4. 配置 Discord 认证
需要配置 Discord OAuth 用于用户认证：

- 访问 [Discord Developer Portal](https://discord.com/developers/applications)
- 点击右上角 "New Application" 创建应用
- 在 "Settings → OAuth2 → General" 中：
  - 复制 "Client ID" 作为 `AUTH_DISCORD_ID` 
  - 点击 "Reset Secret" 获取 `AUTH_DISCORD_SECRET`
  - 添加重定向 URL：
    - 开发环境：`http://localhost:3000/api/auth/callback/discord`
    - 生产环境：替换为实际域名
- 将以上配置添加到 `.env` 文件中

5. 启动开发服务器
```bash
pnpm dev
```

现在你可以访问 `http://localhost:3000` 查看项目运行效果。

## 📝 开发规范

- 代码规范
  - 严格遵循 ESLint 和 Prettier 配置
  - 使用 TypeScript 确保类型安全
  - 遵循 React 最佳实践
  
- 提交规范
  - 使用 Conventional Commits 规范
  - 每次提交前完成代码审查
  - 确保测试用例通过

- 文档规范
  - 及时更新 API 文档
  - 编写清晰的组件文档
  - 维护完整的使用说明

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。欢迎贡献代码，建议提出 issue 或提交 pull request。

## 🤝 联系我们

- 问题反馈：请访问 [GitHub Issues](https://github.com/WebJeffery/ai-offer-miner/issues)
- 商务合作：请发送邮件至 1987458665@qq.com