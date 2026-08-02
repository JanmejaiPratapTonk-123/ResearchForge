# Getting Started

Welcome to ResearchForge! This guide will walk you through everything you need to understand the project and make your first contribution — in **15 minutes or less**.

> 💡 **Two documents to know:**  
> - **`docs/GettingStarted.md`** (this file) — your step-by-step **onboarding walkthrough**.  
> - **`CONTRIBUTING.md`** — the canonical **reference manual** for rules, conventions, and policies.

---

## Table of Contents

- [What Can I Contribute Right Now?](#what-can-i-contribute-right-now)
- [Contributor Skill Matrix](#contributor-skill-matrix)
- [What Should I Learn First?](#what-should-i-learn-first)
- [Step 1 — Understand the Project](#step-1--understand-the-project)
- [Step 2 — Set Up Your Environment](#step-2--set-up-your-environment)
- [Step 3 — Find and Claim an Issue](#step-3--find-and-claim-an-issue)
- [Step 4 — Make Your First Contribution](#step-4--make-your-first-contribution)
- [Step 5 — Submit Your Pull Request](#step-5--submit-your-pull-request)

---

## What Can I Contribute Right Now?

The tech stack is finalized and project scaffolding is underway (**Milestone 1.5**). Current contribution opportunities:

| Area | What's needed | Skills required |
|---|---|---|
| **Documentation** | Improving guides, fixing links | Markdown, writing |
| **Design** | Logo, README banner, UI wireframes | Figma, design tools |
| **Frontend** | shadcn/ui component work, Tailwind styling | React, TypeScript, Tailwind |
| **Backend** | Express routes, Prisma schema | Node.js, TypeScript, SQL |
| **AI Service** | FastAPI endpoints, embedding pipeline | Python, FastAPI |
| **DevOps** | Docker Compose, CI workflow improvements | Docker, GitHub Actions |

Browse [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) and look for the `good first issue` label to find a task that fits your skills.

---

## Contributor Skill Matrix

| Your Skill | Contribution Opportunity | Difficulty | Where |
|---|---|---|---|
| **Markdown / Writing** | Docs, guides, changelogs | 🟢 Beginner | `docs/` |
| **Git / GitHub** | PRs, reviews, issue triage | 🟢 Beginner | `.github/` |
| **Graphic Design / Figma** | Logo, banner, UI wireframes | 🟢 Beginner | `assets/` |
| **React / JSX** | UI components with shadcn/ui | 🟡 Intermediate | `frontend/components/` |
| **TypeScript** | Type definitions, Zod schemas | 🟡 Intermediate | `frontend/`, `backend/` |
| **Tailwind CSS** | Component styling | 🟡 Intermediate | `frontend/` |
| **Node.js / Express** | API routes, middleware | 🟡 Intermediate | `backend/` |
| **Prisma / SQL** | Schema definitions, migrations | 🟡 Intermediate | `database/` |
| **Python** | AI service endpoints | 🔴 Advanced | `ai-services/` |
| **FastAPI** | Embedding & inference routes | 🔴 Advanced | `ai-services/` |
| **Docker / DevOps** | Compose config, CI workflows | 🔴 Advanced | root, `.github/` |

---

## What Should I Learn First?

> 📚 **New to the stack?** Here is the recommended learning order for contributors picking up new technologies:

| Priority | Resource | Time Investment |
|---|---|---|
| 1 | [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) | ~5 minutes |
| 2 | [Tailwind CSS Docs — Core Concepts](https://tailwindcss.com/docs/utility-first) | ~30 minutes |
| 3 | [Prisma Getting Started](https://www.prisma.io/docs/getting-started) | ~20 minutes |
| 4 | [TanStack Query Quickstart](https://tanstack.com/query/latest/docs/framework/react/quick-start) | ~15 minutes |
| 5 | [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial) | ~1 hour (AI contributors) |

You do **not** need to complete all of these before contributing. Start with the resources relevant to your first issue.

---

## Step 1 — Understand the Project

Spend 5 minutes getting context:

1. Read the [README.md](../README.md) — Project overview, stack summary, and current status
2. Read [docs/Vision.md](Vision.md) — Mission and problem statement
3. Read [docs/Architecture.md](Architecture.md) — How the four services interact

---

## Step 2 — Set Up Your Environment

### What you need
- **Git** ([Download](https://git-scm.com/downloads))
- A **GitHub account**
- A text editor ([VS Code](https://code.visualstudio.com/) recommended)
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop)) *(for running services locally in M1.5+)*

### Fork and clone the repository

1. Click **Fork** at the top-right of [github.com/JanmejaiPratapTonk-123/ResearchForge](https://github.com/JanmejaiPratapTonk-123/ResearchForge).
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ResearchForge.git
   cd ResearchForge
   ```
3. Add the **upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/JanmejaiPratapTonk-123/ResearchForge.git
   ```

For service-specific local setup (Docker, Node, Python), see [docs/DeveloperGuide.md](DeveloperGuide.md).

---

## Step 3 — Find and Claim an Issue

1. Go to [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues).
2. Filter by `good first issue` for your first contribution.
3. Comment on the issue: *"I'd like to work on this. Please assign it to me."*
4. Wait for a maintainer to assign it to you (response within **48 hours**).

> **One issue at a time.** Please do not claim multiple issues simultaneously — this keeps opportunities open for everyone.

---

## Step 4 — Make Your First Contribution

1. **Create a branch** off `main`:
   ```bash
   git checkout -b docs/your-change-name
   # or: feat/feature-name, fix/bug-name, design/asset-name
   ```
2. **Make your changes** in your editor or design tool.
3. **Commit** using Conventional Commits:
   ```bash
   git add .
   git commit -m "docs: improve getting started guide"
   ```
   *(See [docs/BranchingStrategy.md](BranchingStrategy.md) for the full git cheat-sheet)*

---

## Step 5 — Submit Your Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin docs/your-change-name
   ```
2. Go to your fork on GitHub and click **Compare & pull request**.
3. Fill in the PR template completely.
4. Click **Create pull request**.
5. A maintainer will review your PR within **72 hours**.

---

👉 **Next Step:** Learn about our mission and long-term vision in **[docs/Vision.md](Vision.md)** *(⏱️ ~3 min read)*!
