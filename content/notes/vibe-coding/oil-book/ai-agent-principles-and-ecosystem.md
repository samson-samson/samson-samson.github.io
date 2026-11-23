---
title: "从 Prompt 到 Harness：一文读懂 AI Agent 演进史"
description: "顺着上下文管理、工具调用和执行框架的演进，理解每一层解决了什么问题。"
params:
  source: https://book.oiloil.org/articles/ai-agent-principles-and-ecosystem
  source_date: "2026-11-06"
  pro: true
---

## 把 Agent 术语放回执行链路

提示词传达意图，上下文补齐相关信息，工具帮助模型与外部系统交互。工作流和运行框架负责串起步骤、保留状态、处理失败和触发反馈。一个术语解决的是哪里的问题，可以从这条链路看出来。

## 本地练习

给「阅读项目文档并提出建议」画流程图。标出读资料、调用工具、等待人确认和记录失败的步骤。回头观察这一任务是一次调用，还是有可重试状态的流程。
