# Jiawen Gu — Academic Homepage

个人学术网站，基于 [Astro](https://astro.build/)，自动部署到 GitHub Pages。

**Live Site**: https://gujiawen777.github.io/homepage/

## 本地开发

```bash
cd astro
npm install        # 首次
npm run dev        # 开发服务器 → http://localhost:4321/homepage/
```

> 配置了 `base: '/homepage'`（GitHub Pages 子路径），本地预览地址带 `/homepage` 前缀。

## 目录结构

```
astro/
├── public/                  # 静态资源（favicon、头像）
├── src/
│   ├── content.config.ts    # 内容集合定义（notes）
│   ├── content/notes/       # 笔记（Markdown + frontmatter）
│   ├── data/                # ★ 结构化数据：日常更新主要改这里
│   │   ├── site.ts          #   个人信息（姓名/邮箱/链接）
│   │   ├── news.ts          #   News 时间线
│   │   ├── publications.ts  #   论文列表（首页/Publications/CV 共用）
│   │   └── research.ts      #   研究方向、项目、领域标签
│   ├── components/          # 组件
│   ├── layouts/Base.astro   # 全局布局
│   ├── pages/               # 路由页面
│   └── styles/global.css    # 设计 token + 通用样式（亮/暗主题）
└── astro.config.mjs         # base 路径、KaTeX、Shiki 配置
```

详细的更新指南（加论文 / 加 News / 发笔记）见 [astro/README.md](astro/README.md)。

## 部署

Push 到 `main` —— GitHub Actions 构建并部署到 `gh-pages` 分支。

## Tech Stack

- [Astro 7](https://astro.build/)（零 JS 运行时）
- KaTeX 数学公式 + Shiki 代码高亮
- GitHub Pages + Actions
