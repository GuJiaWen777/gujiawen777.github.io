# Jiawen Gu — Academic Homepage

个人学术主页，基于 [Astro](https://astro.build/) 构建，零 JS 运行时，自动部署到 GitHub Pages。

**线上地址**：https://gujiawen777.github.io

## 开发

```bash
npm install     # 首次
npm run dev     # 开发服务器 → http://localhost:4321
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
npm run check   # 类型检查
```

## 目录结构

```
.
├── .github/workflows/deploy.yml   # CI：push main 自动构建部署
├── public/                        # 静态资源（favicon、头像）
│   └── images/gjw.jpg
├── src/
│   ├── content.config.ts          # 内容集合定义（notes）
│   ├── content/notes/             # 笔记（Markdown + frontmatter）
│   ├── data/                      # ★ 结构化数据：日常更新改这里
│   │   ├── site.ts                #   个人信息（姓名/邮箱/链接）
│   │   ├── news.ts                #   News 时间线
│   │   ├── publications.ts        #   论文列表（首页/Publications/CV 共用）
│   │   └── research.ts            #   研究方向、项目、领域标签
│   ├── components/                # Header / Footer / PubCard / NoteCard / ThemeToggle
│   ├── layouts/Base.astro         # 全局布局（meta、主题初始化）
│   ├── pages/                     # 路由页面
│   ├── styles/global.css          # 设计 token + 通用样式（亮/暗主题）
│   └── utils.ts                   # url() 链接拼接
├── astro.config.mjs               # KaTeX、Shiki 配置
└── tsconfig.json
```

## 日常更新

| 要做什么 | 改哪里 |
|---|---|
| 加一条 News | `src/data/news.ts` 顶部加一项 |
| 加一篇论文 | `src/data/publications.ts` 顶部加一项（首页、Publications、CV 自动同步） |
| 发一篇笔记 | `src/content/notes/` 新建 `.md`，带 frontmatter |
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

笔记支持 KaTeX（`$...$` 行内、`$$...$$` 块级）和 Shiki 代码高亮。

## 部署

Push 到 `main` 触发 GitHub Actions，构建产物推送到 `gh-pages` 分支。
仓库是用户站（`gujiawen777.github.io`），站点挂在根路径，`base` 为空。

## Tech Stack

- [Astro 7](https://astro.build/)
- KaTeX 数学公式 + Shiki 代码高亮
- GitHub Pages + Actions
