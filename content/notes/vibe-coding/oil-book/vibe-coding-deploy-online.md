---
title: "如何把 Vibe Coding 的项目部署上线"
description: "理清本地预览和公网部署的区别，沿托管、域名解析、环境变量三条线检查上线准备。"
params:
  source: https://book.oiloil.org/articles/vibe-coding-deploy-online
  source_date: "2026-11-19"
  pro: true
  chapter: "06"
---

## 把构建与公网访问分别验收

本地开发服务器用于预览。上线要把正确版本的构建结果交给托管服务，再确认公开域名、站点路径和 HTTPS 能正常访问。先确认站点是否依赖后端运行时、持久化或运行时密钥，再选择托管方式。

## 本地练习

记下一次从提交到发布的流程，保存构建编号。分别访问首页与一个深层页面，核对 HTTP 响应、样式、图片和相对链接。记录实际发布版本和可回退到的提交。
