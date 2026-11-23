---
title: "AI Agent 浏览器自动化与电脑自动化指南"
description: "根据任务是否已有 API 或 CLI、是否依赖网页控件、是否涉及桌面应用，选择合适的自动化入口。"
params:
  source: https://book.oiloil.org/articles/agent-browser-automation
  source_date: "2026-11-03"
  pro: true
---

## 按验收目标选执行入口

有正式 API 或 CLI 的任务可以从数据接口开始。需要核对真实网页操作时，浏览器 DOM 和交互回放更适合。碰到原生窗口或网页工具覆盖不到的动作，再决定是否使用桌面自动化。选择入口前先说明验证的结果是什么。

## 本地练习

把博客验收分成 HTTP 可达、目录跳转和手机排版三项。第一项用命令检查，后两项用浏览器回放和截图。故意改错一个地址，确认失败证据足以定位问题。
