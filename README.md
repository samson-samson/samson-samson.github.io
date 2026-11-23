# Samson 的笔记

用 Hugo 和 Markdown 维护的个人博客。阅读索引位于 `content/notes/vibe-coding/oil-book/index.md`，其专题顺序、标题和导读都从这个文件渲染。

## 写作和预览

本地构建与 CI 使用 Hugo 0.170.1。浏览器验收另需 Node.js 24 和 Python 3。

```sh
hugo server -D
hugo new content notes/vibe-coding/practice/my-notes/index.md
hugo new content essays/my-essay/index.md
```

在文章同目录存放自己的图片，以相对路径引用。准备发布时将文章的 `draft` 设为 `false`。公开站点的内容放在这个仓库。私人草稿留在本机的独立目录或私有仓库。

## 检查

```sh
hugo --gc --minify --panicOnWarning
npm ci
npx playwright install chromium
npm test
```

浏览器用例以 GitHub Pages 项目子路径的方式访问构建产物，覆盖桌面和手机上的主导航、索引分组、链接及布局。截图保存在 `test-results/`。人工验收时，从首页进入「读书笔记 → Vibe Coding → Oil Book 阅读索引」，检查手机文字换行，确认一条专题跳转和一个原文链接的阅读体验。

## 发布

在仓库的 **Settings → Pages** 选择 **GitHub Actions**。PR 运行构建和浏览器检查。人工合并后，默认分支的工作流会把 Hugo 产物部署到 Pages。Git 记录保留稿件历史。
个人博客与读书笔记
