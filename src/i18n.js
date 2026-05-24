export const messages = {
  zh: {
    nav: ['概览', '特性', '模型', '评测', '体验'],
    hero: {
      badge: 'Vue 3 + Vite 驱动',
      title: '探索',
      subtitle: '由深度求索公司打造的新一代大语言模型系列',
      subtitle2: '以开源精神推动 AI 技术民主化，让智能触手可及',
      btnChat: '开始对话',
      btnApi: 'API 平台',
      stats: ['总参数量', '激活参数', '上下文窗口']
    },
    floatingCards: ['多语言理解', '极致性价比', '开源开放', '深度推理'],
    featuresSection: {
      title: '核心特性',
      subtitle: 'DeepSeek 凭什么脱颖而出？'
    },
    features: [
      { title: '混合专家架构 (MoE)', desc: 'DeepSeek-V3 采用 671B 总参数的 MoE 架构，每次推理仅激活 37B 参数，实现高效推理与惊人性能的完美平衡。' },
      { title: '128K 超长上下文', desc: '支持高达 128K token 的上下文窗口，轻松处理长篇文档、复杂对话和深度代码分析场景。' },
      { title: '多语言能力', desc: '中英双语深度优化，同时支持数十种语言，中文理解和生成能力业界领先。' },
      { title: '代码实力卓越', desc: '在 HumanEval、MBPP、LiveCodeBench 等编程基准测试中表现出色，是开发者的最佳编程伙伴。' },
      { title: '联网搜索', desc: '支持联网搜索功能，获取实时信息，让回答更加准确及时。' },
      { title: '文件处理', desc: '支持上传图片、PDF、Word、Excel、PPT 等文件，从中提取文字信息进行处理和分析。' }
    ],
    modelsSection: {
      title: '模型家族',
      subtitle: '两大核心模型，满足不同场景需求'
    },
    models: [
      { tag: '旗舰模型', desc: '最新一代 MoE 大语言模型，在知识问答、长文本理解、代码生成、数学推理等全方位能力上达到国际顶尖水平。训练仅花费 278 万 H800 GPU 小时，成本效益极高。' },
      { tag: '推理专家', desc: '专注于深度推理的模型，采用强化学习训练，具备「思维链」能力。在数学竞赛、编程竞赛、科学推理等需要多步逻辑推导的场景中表现惊艳，媲美 OpenAI o1。' }
    ],
    benchmarksSection: {
      title: '评测基准',
      subtitle: '在多个权威基准测试中达到世界领先水平',
      colBenchmark: '基准测试'
    },
    trySection: {
      title: '立即体验',
      subtitle: '多种方式接入 DeepSeek'
    },
    tryCards: [
      { title: '网页对话', desc: '访问 chat.deepseek.com，免费在线使用', link: '前往 →' },
      { title: '移动应用', desc: 'iOS / Android 应用商店下载官方 App', link: '下载 →' },
      { title: 'API 接入', desc: '兼容 OpenAI 格式，极低成本调用', link: '接入 →' }
    ],
    footer: {
      tagline: '深度求索，探索未知',
      tech: '本站使用 Vue 3 + Vite 构建'
    }
  },

  en: {
    nav: ['Overview', 'Features', 'Models', 'Benchmarks', 'Try'],
    hero: {
      badge: 'Powered by Vue 3 + Vite',
      title: 'Explore',
      subtitle: 'Next-generation large language model series by DeepSeek',
      subtitle2: 'Democratizing AI through open source — making intelligence accessible to all',
      btnChat: 'Start Chat',
      btnApi: 'API Platform',
      stats: ['Total Parameters', 'Activated Params', 'Context Window']
    },
    floatingCards: ['Multilingual', 'Cost-Effective', 'Open Source', 'Deep Reasoning'],
    featuresSection: {
      title: 'Core Features',
      subtitle: 'What makes DeepSeek stand out?'
    },
    features: [
      { title: 'Mixture of Experts (MoE)', desc: 'DeepSeek-V3 uses a 671B total parameter MoE architecture, activating only 37B parameters per inference — achieving a perfect balance of efficiency and performance.' },
      { title: '128K Long Context', desc: 'Supports up to 128K token context windows, effortlessly handling long documents, complex dialogues, and deep code analysis.' },
      { title: 'Multilingual Mastery', desc: 'Deeply optimized for Chinese and English, with support for dozens of languages. Industry-leading Chinese comprehension and generation.' },
      { title: 'Code Excellence', desc: 'Outstanding performance on HumanEval, MBPP, LiveCodeBench and other coding benchmarks — the ultimate coding companion for developers.' },
      { title: 'Web Search', desc: 'Built-in web search capability for real-time information, making responses more accurate and timely.' },
      { title: 'File Processing', desc: 'Upload images, PDFs, Word, Excel, PPT files and extract text for processing and analysis.' }
    ],
    modelsSection: {
      title: 'Model Family',
      subtitle: 'Two core models for different scenarios'
    },
    models: [
      { tag: 'Flagship', desc: 'Latest-generation MoE large language model, reaching world-class performance in knowledge Q&A, long-text comprehension, code generation, and mathematical reasoning. Trained with only 2.78M H800 GPU hours — extremely cost-effective.' },
      { tag: 'Reasoning Expert', desc: 'A model focused on deep reasoning, trained with reinforcement learning, featuring "chain of thought" capability. Stunning performance in math competitions, coding contests, and scientific reasoning scenarios requiring multi-step logical deduction — rivaling OpenAI o1.' }
    ],
    benchmarksSection: {
      title: 'Benchmarks',
      subtitle: 'World-leading performance across authoritative benchmarks',
      colBenchmark: 'Benchmark'
    },
    trySection: {
      title: 'Get Started',
      subtitle: 'Multiple ways to access DeepSeek'
    },
    tryCards: [
      { title: 'Web Chat', desc: 'Visit chat.deepseek.com, free online access', link: 'Go →' },
      { title: 'Mobile App', desc: 'Download the official app from iOS / Android stores', link: 'Download →' },
      { title: 'API Access', desc: 'OpenAI-compatible format, ultra-low cost', link: 'Get Started →' }
    ],
    footer: {
      tagline: 'DeepSeek — Explore the Unknown',
      tech: 'Built with Vue 3 + Vite'
    }
  }
}

// Shared metadata across languages
export const featureIcons = ['🧠', '💬', '🌐', '💻', '🔗', '📁']

export const modelMeta = [
  { name: 'DeepSeek-V3', color: '#6C5CE7' },
  { name: 'DeepSeek-R1', color: '#00B894' }
]

export const floatingIcons = ['💡', '⚡', '🔓', '🎯']

export const benchmarks = [
  { name: 'MATH-500', v3: '90.2%', r1: '97.3%' },
  { name: 'AIME 2024', v3: '39.2%', r1: '79.8%' },
  { name: 'Codeforces', v3: '51.6%', r1: '96.3%' },
  { name: 'GPQA Diamond', v3: '59.1%', r1: '71.5%' },
  { name: 'MMLU', v3: '88.5%', r1: '90.8%' },
  { name: 'HumanEval', v3: '91.3%', r1: '93.8%' }
]
