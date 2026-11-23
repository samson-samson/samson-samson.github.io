---
title: "大模型底层原理：注意力机制与 KV Cache"
description: "把逐 Token 生成、注意力和 KV Cache 串起来，区分长对话的效果问题与前缀复用的成本收益。"
params:
  source: https://book.oiloil.org/articles/llm-attention-and-kv-cache
  source_date: "2026-10-30"
---

## KV Cache 复用的是历史计算中间量

大模型逐 Token 生成。注意力决定相关位置的信息怎样参与当前计算，KV Cache 保存历史位置已经算出的键和值，生成后续 Token 时可以复用。跨请求的公共前缀是否命中缓存，需要由服务端计数和请求结构确认。

## 本地练习

用同一模型发出一组固定请求，记录输入长度、首段可见内容的延迟和缓存计数。随后只改相同前缀的位置或长度，保留实际发送形态，观察哪项指标发生变化。
