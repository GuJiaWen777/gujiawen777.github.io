# Jiawen Gu — Academic Homepage (Astro)

新一代个人学术主页，基于 [Astro](https://astro.build/)。零 JS 运行时、构建快、样式完全可控。

## 本地开发

```bash
cd astro
npm install        # 首次
npm run dev        # 开发服务器 → http://localhost:4321/homepage/
```

> 注意：配置了 `base: '/homepage'`（GitHub Pages 子路径部署），所以本地预览地址带 `/homepage` 前缀。

其他命令：

```bash
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
```

## 目录结构

```
astro/
├── public/                  # 静态资源（favicon、头像等）
│   └── images/gjw.jpg       # 头像（从旧站 docs/ 复制）
├── src/
│   ├── content.config.ts    # 内容集合定义（notes）
│   ├── content/notes/       # 笔记（Markdown + frontmatter）
│   ├── data/                # ★ 结构化数据：以后更新主要改这里
│   │   ├── site.ts          #   个人信息（姓名/邮箱/链接）
│   │   ├── news.ts          #   News 时间线
│   │   ├── publications.ts  #   论文列表（首页/Publications/CV 共用）
│   │   └── research.ts      #   研究方向 & 项目
│   ├── components/          # 组件（PubCard / NoteCard / Header / Footer…）
│   ├── layouts/Base.astro   # 全局布局（meta、主题初始化）
│   ├── pages/               # 路由页面
│   └── styles/global.css    # 设计 token + 通用样式（亮/暗主题）
└── astro.config.mjs         # base 路径、KaTeX、Shiki 配置
```

## 日常更新

| 要做什么 | 改哪里 |
|---|---|
| 加一条 News | `src/data/news.ts` 顶部加一项 |
| 加一篇论文 | `src/data/publications.ts` 顶部加一项（首页、Publications、CV 自动同步） |
| 发一篇笔记 | `src/content/notes/` 新建 `.md`，带 frontmatter（title / category / tags / date） |
| 改研究方向/项目 | `src/data/research.ts` |
| 改个人信息 | `src/data/site.ts` |

笔记 frontmatter 示例：

```yaml
---
title: 笔记标题
description: 一句话摘要（列表页展示）
category: 机器学习        # 机器学习 / 深度学习 / 大语言模型
date: 2026-03-10
tags: [RAG, LLM]
---
```

笔记支持 KaTeX 数学公式（`$...$` 行内、`$$...$$` 块级）和 Shiki 代码高亮。

## 部署

构建产物部署到 GitHub Pages（`gujiawen777.github.io/homepage`）。
切换正式启用时，用 `deploy-workflow.yml` 的内容替换 `.github/workflows/deploy.yml`
（如果 astro/ 目录挪到仓库根目录，把 workflow 里的 `working-directory` / `path` 改掉即可）。
