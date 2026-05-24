# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Architecture

- Single-page Vue 3 app, no router or state management library
- Composition API with `<script setup>` syntax
- All UI lives in `src/App.vue` — template, logic, and scoped styles in one SFC
- Dark theme with CSS custom properties defined on `:root`
- No external UI libraries; all styles are hand-written
- Responsive via CSS media queries (single breakpoint at 768px)

## Screenshots

When taking Playwright screenshots of Chromium, the system is missing runtime libraries. Export the conda library path first:

```bash
export LD_LIBRARY_PATH="/home/zbl/anaconda3/lib:$LD_LIBRARY_PATH"
```
