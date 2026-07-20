🌍 *[English](README.md) ∙ [简体中文](README.zh.md)*

# Ranxiu 的个人主页

这是 [Ranxiu](https://github.com/afetmin) 的个人主页，用来展示 macOS 原生应用、AI 工作流、Web 产品与开源项目。

页面完整沿用 [Corey Chiu Portfolio Template](https://github.com/iAmCorey/coreychiu-portfolio-template) 的结构与视觉设计，并替换为 Ranxiu 的真实公开资料和项目。

## 主要内容

- 个人介绍、GitHub 头像与社交链接
- GitHub 贡献日历与技术图标云
- 精选项目与开源仓库
- 响应式布局与明亮/黑暗模式
- MDX 博客、RSS、SEO 与分析能力

## 技术栈

- Next.js 16 + React 19
- TypeScript + Tailwind CSS
- Shadcn/UI + MagicUI
- Phosphor Icons

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看页面。

## 配置

- `src/config/infoConfig.ts`：个人信息、社交链接与技术栈
- `src/config/projects.ts`：精选项目与开源项目
- `src/config/siteConfig.ts`：站点地址与导航
- `.env.local`：站点地址与可选分析服务

## 致谢

页面设计与基础实现来自 [Corey Chiu](https://coreychiu.com/) 的开源模板，依照原项目 MIT License 使用。
