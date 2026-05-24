# DeepSeek Intro

一个基于 Vue 3 + Vite 构建的 DeepSeek AI 模型介绍网站，支持中英双语切换。

## 功能

- **双语支持** — 中文 / English 一键切换
- **核心特性** — MoE 架构、128K 上下文、多语言能力等 6 大亮点
- **模型家族** — DeepSeek-V3 旗舰模型 & DeepSeek-R1 推理专家
- **发展历程** — 7 个关键节点的可视化时间线
- **评测基准** — V3 / R1 对比数据展示
- **深色主题** — CSS 自定义属性驱动的深色 UI
- **响应式** — 桌面端 / 移动端适配

## 技术栈

- Vue 3.5 (Composition API, `<script setup>`)
- Vite 6
- 纯手写 CSS（无外部 UI 库）
- Playwright (浏览器测试)

## 开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 (http://localhost:5173)
npm run build      # 生产构建到 dist/
npm run preview    # 预览生产构建
```

## 版本

| Tag | 说明 |
|-----|------|
| `v1.0-bilingual` | 中英双语介绍页 |
| `v2.0-history` | 新增发展历程时间线 |
