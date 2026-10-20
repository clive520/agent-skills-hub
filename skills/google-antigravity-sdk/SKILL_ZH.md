---
name: google-antigravity-sdk
description: 使用 Google Antigravity (AGY) SDK 設計、實作與除錯自主 AI Agent 以及多 Agent 協同系統。提供 Agent 建立、配置、工具掛載、生命週期管理與多代理編排的完整指導。
---

# Google Antigravity SDK 自主代理開發指南

Google Antigravity SDK 是專為建構自主 Agent 與多 Agent 協作系統設計的官方開發套件。

---

## 安裝與環境準備

- 安裝核心套件：
  ```bash
  pip install google-antigravity
  ```
- 驗證金鑰與環境變數：確保 `GEMINI_API_KEY` 或相應憑證已正確設定。

---

## 核心設計模式

1. **單一自主 Agent**：
   - 定義 System Prompt、掛載本機與遠端工具。
   - 執行規劃、推理、工具調用與成果回傳循環。
2. **多 Agent 協同架構 (Multi-Agent Swarm / Hierarchical)**：
   - 主調度代理 (Orchestrator) 拆解子任務並分派給專業子代理。
   - 子代理獨立維護專屬對話記憶與工具集，完成後向上回報。
3. **反應式事件處理**：
   - 監聽外部訊號（Webhook、檔案變更、排程通知），自適應喚醒執行。
