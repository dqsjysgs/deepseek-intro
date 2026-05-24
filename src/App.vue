<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  messages, featureIcons, modelMeta, floatingIcons, benchmarks
} from './i18n.js'

const lang = ref('zh')
const scrolled = ref(false)

const t = computed(() => messages[lang.value])

// Features: merge icons with translated text
const features = computed(() =>
  featureIcons.map((icon, i) => ({ icon, ...t.value.features[i] }))
)

// Models: merge model meta with translated text
const models = computed(() =>
  modelMeta.map((m, i) => ({ ...m, ...t.value.models[i] }))
)

const floatingCards = computed(() =>
  floatingIcons.map((icon, i) => ({ icon, text: t.value.floatingCards[i] }))
)

function toggleLang() {
  lang.value = lang.value === 'zh' ? 'en' : 'zh'
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <div class="app">
    <!-- Navbar -->
    <nav :class="['navbar', { scrolled }]">
      <div class="nav-inner">
        <div class="logo">
          <span class="logo-icon">🐋</span>
          <span class="logo-text">DeepSeek</span>
        </div>
        <div class="nav-right">
          <button class="lang-toggle" @click="toggleLang">
            {{ lang === 'zh' ? 'EN' : '中文' }}
          </button>
          <div class="nav-links">
            <button v-for="(item, i) in t.nav" :key="i" @click="scrollToSection(['overview','features','models','history','benchmarks','try'][i])">
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section id="overview" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">{{ t.hero.badge }}</div>
        <h1 class="hero-title">
          {{ t.hero.title }} <span class="gradient-text">DeepSeek</span>
        </h1>
        <p class="hero-subtitle">
          {{ t.hero.subtitle }}<br />
          {{ t.hero.subtitle2 }}
        </p>
        <div class="hero-actions">
          <a href="https://chat.deepseek.com" target="_blank" class="btn-primary">{{ t.hero.btnChat }}</a>
          <a href="https://platform.deepseek.com" target="_blank" class="btn-secondary">{{ t.hero.btnApi }}</a>
        </div>
        <div class="hero-stats">
          <div v-for="(label, i) in t.hero.stats" :key="i" class="stat-group">
            <div class="stat">
              <span class="stat-number">{{ ['671B','37B','128K'][i] }}</span>
              <span class="stat-label">{{ label }}</span>
            </div>
            <div v-if="i < 2" class="stat-divider"></div>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div
          v-for="(card, i) in floatingCards"
          :key="i"
          :class="['floating-card', 'card-' + (i + 1)]"
        >
          <span class="card-icon">{{ card.icon }}</span>
          <span>{{ card.text }}</span>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="features">
      <div class="section-header">
        <h2>{{ t.featuresSection.title }}</h2>
        <p>{{ t.featuresSection.subtitle }}</p>
      </div>
      <div class="features-grid">
        <div v-for="(f, i) in features" :key="i" class="feature-card" :style="{ animationDelay: i * 0.1 + 's' }">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Models -->
    <section id="models" class="models">
      <div class="section-header">
        <h2>{{ t.modelsSection.title }}</h2>
        <p>{{ t.modelsSection.subtitle }}</p>
      </div>
      <div class="models-grid">
        <div v-for="m in models" :key="m.name" class="model-card" :style="{ borderTopColor: m.color }">
          <div class="model-header">
            <h3>{{ m.name }}</h3>
            <span class="model-tag" :style="{ background: m.color }">{{ m.tag }}</span>
          </div>
          <p class="model-desc">{{ m.desc }}</p>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section id="history" class="history">
      <div class="section-header">
        <h2>{{ t.historySection.title }}</h2>
        <p>{{ t.historySection.subtitle }}</p>
      </div>
      <div class="timeline">
        <div class="timeline-line"></div>
        <div v-for="(item, i) in t.timeline" :key="i" class="timeline-item" :class="{ left: i % 2 === 0, right: i % 2 !== 0 }">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benchmarks -->
    <section id="benchmarks" class="benchmarks">
      <div class="section-header">
        <h2>{{ t.benchmarksSection.title }}</h2>
        <p>{{ t.benchmarksSection.subtitle }}</p>
      </div>
      <div class="benchmark-table-wrapper">
        <table class="benchmark-table">
          <thead>
            <tr>
              <th>{{ t.benchmarksSection.colBenchmark }}</th>
              <th>
                <span class="model-dot" style="background:#6C5CE7"></span>
                DeepSeek-V3
              </th>
              <th>
                <span class="model-dot" style="background:#00B894"></span>
                DeepSeek-R1
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="b in benchmarks" :key="b.name">
              <td class="bench-name">{{ b.name }}</td>
              <td>{{ b.v3 }}</td>
              <td class="highlight">{{ b.r1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Try -->
    <section id="try" class="try">
      <div class="section-header">
        <h2>{{ t.trySection.title }}</h2>
        <p>{{ t.trySection.subtitle }}</p>
      </div>
      <div class="try-cards">
        <div v-for="(card, i) in t.tryCards" :key="i" class="try-card">
          <div class="try-icon">{{ ['💻','📱','🔌'][i] }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <a :href="['https://chat.deepseek.com','https://download.deepseek.com','https://platform.deepseek.com'][i]" target="_blank">{{ card.link }}</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-icon">🐋</span>
          <span>DeepSeek</span>
        </div>
        <p class="footer-tagline">{{ t.footer.tagline }}</p>
        <p class="footer-tech">{{ t.footer.tech }}</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* ========== Global ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #0a0a1a;
  --bg-card: #12122a;
  --text: #e8e8f0;
  --text-muted: #8888aa;
  --primary: #6C5CE7;
  --primary-gradient: linear-gradient(135deg, #6C5CE7, #a29bfe);
  --green: #00B894;
  --radius: 12px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ========== Navbar ========== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 26, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 10px 0;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
}

.logo-icon {
  font-size: 26px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-toggle {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--text);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
}

.lang-toggle:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.25);
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-links button {
  background: none;
  border: none;
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.nav-links button:hover {
  color: var(--text);
  background: rgba(255,255,255,0.05);
}

/* ========== Hero ========== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(108, 92, 231, 0.15), transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 184, 148, 0.1), transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(108, 92, 231, 0.08), transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  text-align: center;
  max-width: 700px;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(108, 92, 231, 0.15);
  border: 1px solid rgba(108, 92, 231, 0.3);
  border-radius: 20px;
  font-size: 13px;
  color: var(--primary);
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(135deg, #6C5CE7, #a29bfe, #00B894);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-primary, .btn-secondary {
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary-gradient);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(108, 92, 231, 0.4);
}

.btn-secondary {
  background: rgba(255,255,255,0.05);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.1);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.stat-group {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--text), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 13px;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.1);
}

.hero-visual {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(18, 18, 42, 0.9);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  font-size: 14px;
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.card-icon { font-size: 20px; }

.card-1 { top: 18%; left: 8%; animation-delay: 0s; }
.card-2 { top: 15%; right: 10%; animation-delay: 1.5s; }
.card-3 { bottom: 25%; left: 6%; animation-delay: 3s; }
.card-4 { bottom: 20%; right: 8%; animation-delay: 4.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* ========== Features ========== */
.features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-header p {
  color: var(--text-muted);
  font-size: 16px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: var(--radius);
  padding: 32px;
  transition: all 0.3s;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
}

.feature-card:hover {
  border-color: rgba(108, 92, 231, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(108, 92, 231, 0.1);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--text);
}

.feature-card p {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ========== Models ========== */
.models {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.model-card {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.04);
  border-top: 3px solid;
  border-radius: var(--radius);
  padding: 36px;
}

.model-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.model-header h3 {
  font-size: 24px;
}

.model-tag {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.model-desc {
  color: var(--text-muted);
  line-height: 1.8;
}

/* ========== Timeline ========== */
.history {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--green), transparent);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item.left {
  justify-content: flex-start;
  padding-right: calc(50% + 40px);
}

.timeline-item.right {
  justify-content: flex-end;
  padding-left: calc(50% + 40px);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 24px;
  width: 14px;
  height: 14px;
  background: var(--primary);
  border: 3px solid var(--bg);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.6);
  z-index: 1;
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: var(--radius);
  padding: 24px;
  position: relative;
  transition: all 0.3s;
  width: 100%;
}

.timeline-content:hover {
  border-color: rgba(108, 92, 231, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(108, 92, 231, 0.1);
}

.timeline-date {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  background: rgba(108, 92, 231, 0.12);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.timeline-content h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.timeline-content p {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
}

/* ========== Benchmarks ========== */
.benchmarks {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px;
}

.benchmark-table-wrapper {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: var(--radius);
  overflow: hidden;
}

.benchmark-table {
  width: 100%;
  border-collapse: collapse;
}

.benchmark-table th {
  text-align: left;
  padding: 18px 24px;
  font-size: 14px;
  color: var(--text-muted);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  font-weight: 500;
}

.benchmark-table td {
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.bench-name {
  font-weight: 600;
}

.highlight {
  color: var(--green);
  font-weight: 700;
}

.model-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}

/* ========== Try ========== */
.try {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.try-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.try-card {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: var(--radius);
  padding: 36px;
  text-align: center;
  transition: all 0.3s;
}

.try-card:hover {
  border-color: rgba(108, 92, 231, 0.3);
  transform: translateY(-4px);
}

.try-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.try-card h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.try-card p {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 16px;
}

.try-card a {
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
}

.try-card a:hover {
  text-decoration: underline;
}

/* ========== Footer ========== */
.footer {
  border-top: 1px solid rgba(255,255,255,0.04);
  padding: 40px 24px;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.footer-tagline {
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 8px;
}

.footer-tech {
  color: var(--text-muted);
  font-size: 12px;
  opacity: 0.5;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .nav-links { display: none; }

  .timeline-line {
    left: 16px;
  }

  .timeline-item.left,
  .timeline-item.right {
    justify-content: flex-start;
    padding-left: 48px;
    padding-right: 0;
  }

  .timeline-dot {
    left: 16px;
  }

  .features-grid,
  .try-cards {
    grid-template-columns: 1fr;
  }

  .models-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    gap: 20px;
    flex-wrap: wrap;
  }

  .stat-group {
    gap: 20px;
  }

  .stat-number {
    font-size: 22px;
  }

  .hero-visual {
    display: none;
  }

  .floating-card {
    display: none;
  }
}
</style>
