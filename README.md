# 🎴 Habba | هبّة — Jeddah Restaurant Matchmaker

![Status: Sprint 0](https://img.shields.io/badge/Status-Sprint%200%3A%20Foundation%20%26%20Architecture-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL%20%2B%20RLS-3ECF8E?style=flat-square&logo=supabase)

> A guest-first, gamified restaurant discovery and matchmaking application tailored for Jeddah, Saudi Arabia. Built to cure dining decision fatigue without forcing user sign-ups.

---

## 📌 Project State: Sprint 0 Baseline
This repository currently contains the **Next.js App Router foundation**, architectural blueprints, security boundaries, and AI developer workflows. 

In accordance with strict engineering guidelines, **we do not claim planned backend features, Supabase migrations, authentication, or live APIs as currently implemented.** The current phase focuses on system design, database modeling, and frontend prototyping. 

The single source of truth for our technical roadmap, security boundary, and database schema can be found in [`docs/DEVELOPMENT_WORKFLOW.md`](./docs/DEVELOPMENT_WORKFLOW.md).

---

## 💡 The Problem & The Vision
Most dining discovery platforms feel like bloated spreadsheets or force users to create social accounts just to save a location. **Habba (هبّة)** takes a different approach:
* **The Vibe Check:** Instead of endless scrolling, users select an immediate dining mood (*Chilled Specialty Coffee*, *Heavy Feast*, *Trending / Viral*, or *Hidden Gems*).
* **The Matchmaker Deck:** A fluid, Tinder-style card interface that allows users to swipe right (*Crave*) or swipe left (*Skip*) to build an instant, real-time shortlist.
* **Deterministic Decision Engine:** Once a shortlist is built, our "Help Me Choose" algorithm picks the optimal location based on real-time opening hours, proximity, and user preference signals.

---

## 🏛️ Core Architectural Principles

### 1. Guest-First Local Storage (`localStorage` Architecture)
We prioritize immediate user value over account acquisition. 
* Saving a restaurant works **instantaneously** without a sign-in modal.
* We utilize a versioned, local-first JSON index (`jrs:favorites`) with multi-tab synchronization and quota management.
* Server-side authentication (Supabase Auth & `account_favorites` table) is strictly an **optional upgrade** for cross-device sync and backup, executed via idempotent database merge functions.

### 2. Bilingual & RTL-First Design
Designed deliberately for the Saudi market. We do not rely on CSS auto-flipping; layouts, typography, and database search queries are engineered from day one to support **Arabic (RTL)** and **English (LTR)** natively.

### 3. Strict Security & Database Discipline
* Every exposed table and storage bucket enforces **Row-Level Security (RLS)**.
* Schema modifications are handled exclusively through reviewed, ordered PostgreSQL migrations.
* Service-role keys are strictly isolated to server-only execution boundaries and never leaked to client bundles.

---

## 🧰 Tech Stack & Tools

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js (App Router), React, TypeScript | Server-rendered public pages, SEO optimization, and type safety. |
| **Styling** | Tailwind CSS / CSS Variables | Responsive, high-contrast dark theme optimized for mobile viewports. |
| **Backend / DB** | Supabase (PostgreSQL) | Relational data, full-text bilingual search, and Row-Level Security. |
| **AI Workflow** | Claude Code / Agent Standards | Strict automated coding rules enforced via `AGENTS.md` and `CLAUDE.md`. |

---

## 📂 Repository Structure

```text
├── docs/
│   └── DEVELOPMENT_WORKFLOW.md   # Master product, backend, RLS, and delivery roadmap
├── src/
│   └── app/                      # Next.js App Router root layout and initial views
├── AGENTS.md                     # Engineering expectations & automated PR completion rules
├── CLAUDE.md                     # CLI developer guidelines and build commands
└── README.md                     # You are here
