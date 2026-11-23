---
title: Oil Book 阅读索引
description: Oil Book 实战指南的专题目录和逐篇阅读要点。
layout: reading-index
weight: 10
params:
  author: Oil 欧呦
  source: https://book.oiloil.org/articles
  topics:
    - id: vibe-coding-course
      title: 从 0 到 1 学 Vibe Coding
      note: 系列规划 9 章，原站目录目前列出 8 章。
      articles:
        - title: "了解 AI Agent 的常用操作"
          url: https://book.oiloil.org/articles/ai-agent-common-operations
          summary: "把任务放进独立项目目录，练习交付背景、控制执行过程，以及向新对话交接。"
          chapter: "01"
        - title: "Vibe Coding 必备的研发与 AI 基础概念"
          url: https://book.oiloil.org/articles/ai-and-dev-core-concepts
          summary: "从单文件原型出发，理解组件、类型、前后端和数据库的分工，以及模型 API 的输入输出。"
          chapter: "02"
          pro: true
        - title: "如何从 0 到 1 Vibe Coding 一个个人网站"
          url: https://book.oiloil.org/articles/vibe-coding-website-from-scratch
          summary: "先用现有个人资料确定网站目标和信息架构，再用几个首屏原型选定方向，最后落地网站。"
          chapter: "03"
          pro: true
        - title: "如何使用 AI 做出有高级感的设计"
          url: https://book.oiloil.org/articles/ai-ui-design
          summary: "用字体、布局和图像把设计方向做出差异，选定方案后按截图和具体元素逐轮调整。"
          chapter: "04"
          pro: true
        - title: "从 0 到 1 学会使用 Git 与 GitHub"
          url: https://book.oiloil.org/articles/git-from-scratch
          summary: "串起本地提交、版本回退、分支协作和 PR 审查，理解临时修改与凭据如何处理。"
          chapter: "05"
          pro: true
        - title: "如何把 Vibe Coding 的项目部署上线"
          url: https://book.oiloil.org/articles/vibe-coding-deploy-online
          summary: "理清本地预览和公网部署的区别，沿托管、域名解析、环境变量三条线检查上线准备。"
          chapter: "06"
          pro: true
        - title: "如何使用 AI 长期开发一个复杂项目"
          url: https://book.oiloil.org/articles/agent-long-project-management
          summary: "用长期项目案例理解技术选型、Agent 分工、项目规则、测试和发版如何相互配合。"
          chapter: "07"
          pro: true
        - title: "Vibe Coding 如何搭配模型与节省开支"
          url: https://book.oiloil.org/articles/multi-model-routing-and-cost
          summary: "用任务完成成本衡量模型组合，把复杂推理和常规执行分开，再检查订阅额度与缓存使用。"
          chapter: "08"
          pro: true
    - id: ai-productivity
      title: AI 基础与提效
      articles:
        - title: "AI Agent 推荐与环境配置"
          url: https://book.oiloil.org/articles/ai-agent-selection-and-proxy
          summary: "从文件操作、命令执行和模型能力出发选工具，梳理安装、订阅与网络环境的准备事项。"
        - title: "我使用 AI 的四个高效习惯"
          url: https://book.oiloil.org/articles/ai-efficiency-habits
          summary: "用语音降低输入成本，让 Agent 通过提问补齐背景，并把反复验证过的流程沉淀成 Skill。"
    - id: agent-engineering
      title: Agent 与工程
      articles:
        - title: "从 Prompt 到 Harness：一文读懂 AI Agent 演进史"
          url: https://book.oiloil.org/articles/ai-agent-principles-and-ecosystem
          summary: "顺着上下文管理、工具调用和执行框架的演进，理解每一层解决了什么问题。"
          pro: true
        - title: "AI Agent 浏览器自动化与电脑自动化指南"
          url: https://book.oiloil.org/articles/agent-browser-automation
          summary: "根据任务是否已有 API 或 CLI、是否依赖网页控件、是否涉及桌面应用，选择合适的自动化入口。"
          pro: true
        - title: "一文读懂 DeepSeek Super-agent"
          url: https://book.oiloil.org/articles/deepseek-super-agent-architecture
          summary: "从 Router 和 Worker 的职责入手，理解多话题并行时如何分发事件、管理上下文和回收结果。"
        - title: "大模型底层原理：注意力机制与 KV Cache"
          url: https://book.oiloil.org/articles/llm-attention-and-kv-cache
          summary: "把逐 Token 生成、注意力和 KV Cache 串起来，区分长对话的效果问题与前缀复用的成本收益。"
        - title: "怎样用好子 Agent"
          url: https://book.oiloil.org/articles/subagent-workflow
          summary: "识别边界清楚、可以独立验证的子任务，并为各角色定义输入、交付物与主 Agent 的验收责任。"
        - title: "从 0 到 1 了解什么是 Skill"
          url: https://book.oiloil.org/articles/skill-guide
          summary: "了解 Skill 的文件组织与按需加载，区分补充领域知识和执行固定流程两类用途。"
        - title: "如何从 0 到 1 写一个好用的 Skill"
          url: https://book.oiloil.org/articles/skill-dev-guide
          summary: "先实际走通任务，再提炼成 Skill，用无历史上下文的新会话复测，把稳定的重复步骤写成脚本。"
    - id: product-design
      title: 产品与设计
      articles:
        - title: "如何从 0 到 1 成为一名 AI 产品经理"
          url: https://book.oiloil.org/articles/become-ai-product-manager
          summary: "从转岗案例了解 AI 应用团队的日常工作、需要补足的技术概念，以及如何用作品呈现能力。"
          pro: true
    - id: business
      title: 商业化与创作
      articles:
        - title: "如何从 0 到 1 开始做自媒体"
          url: https://book.oiloil.org/articles/how-to-start-self-media
          summary: "围绕可持续更新，观察作者怎样把选题、录制、剪辑和分发做成固定流程，再看各类收入来源。"
          pro: true
        - title: "如何做一个商业化的付费 Skill"
          url: https://book.oiloil.org/articles/commercial-paid-skill
          summary: "看经验如何变成可交付的流程、模板、脚本与评审标准，以及免费版和付费版怎样划分。"
          pro: true
        - title: "个人开发者收款指南"
          url: https://book.oiloil.org/articles/indie-dev-stripe-payment
          summary: "从作者的 Stripe 接入案例了解个人收款渠道、支付接入和测试流程，具体要求以服务商的现行规则为准。"
---

沿用原站的专题和文章顺序。每篇导读依据公开可见的正文或介绍整理，点击标题可阅读原文。Pro 表示原站的会员文章。
