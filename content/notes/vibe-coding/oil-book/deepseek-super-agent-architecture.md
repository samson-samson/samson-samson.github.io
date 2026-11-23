---
title: "一文读懂 DeepSeek Super-agent"
description: "从 Router 和 Worker 的职责入手，理解多话题并行时如何分发事件、管理上下文和回收结果。"
params:
  source: https://book.oiloil.org/articles/deepseek-super-agent-architecture
  source_date: "2026-11-01"
---

## 并行任务需要知道由谁接收结果

文章从并行场景讲路由与执行的分工。路由侧处理任务流向，执行侧运行具体工作。事件过滤和上下文选择影响每个执行者看到的范围，也关系到多任务交错时结果是否回到正确会话。

## 本地练习

画三项同时进入的请求，各自标上任务 ID、状态、预计交付物。模拟一条结果延迟和一项取消，检查分发端能否正确接回结果并向用户反映终态。
