# Getting Started

Welcome to ResearchForge. This guide will walk you through everything you need to understand the project and make your first contribution — in 15 minutes or less.

> **Current state:** ResearchForge is in the planning and early development phase. No runnable software exists yet. The best contributions right now are documentation, design, and architecture discussions.

---

## Table of Contents

- [Step 1 — Understand the Project](#step-1--understand-the-project)
- [Step 2 — Set Up Your Environment](#step-2--set-up-your-environment)
- [Step 3 — Explore the Repository](#step-3--explore-the-repository)
- [Step 4 — Find Something to Work On](#step-4--find-something-to-work-on)
- [Step 5 — Make Your First Contribution](#step-5--make-your-first-contribution)
- [Step 6 — Ask for Help](#step-6--ask-for-help)
- [What to Expect Next](#what-to-expect-next)

---

## Step 1 — Understand the Project

Before writing a single line, spend 5 minutes reading:

1. [README.md](../README.md) — What ResearchForge is and its current status
2. [docs/Vision.md](Vision.md) — Why the project exists and who it's for
3. [docs/Roadmap.md](Roadmap.md) — What's being built and when

This gives you enough context to make a useful contribution without going in blind.

---

## Step 2 — Set Up Your Environment

### What you need

- **Git** — [Install Git](https://git-scm.com/downloads)
- **A GitHub account** — [Sign up at github.com](https://github.com)
- **A text editor** — [VS Code](https://code.visualstudio.com/) is recommended

That's all you need for documentation contributions. You don't need Node.js, Python, or Docker yet — those will be required when code implementation begins.

### Fork and clone the repository

1. **Fork the repository** — Click the Fork button at the top right of [github.com/JanmejaiPratapTonk-123/ResearchForge](https://github.com/JanmejaiPratapTonk-123/ResearchForge)

2. **Clone your fork**

```bash
git clone https://github.com/YOUR_USERNAME/ResearchForge.git
cd ResearchForge
```

3. **Add the upstream remote** so you can pull future changes

```bash
git remote add upstream https://github.com/JanmejaiPratapTonk-123/ResearchForge.git
```

---

## Step 3 — Explore the Repository

Open the repository in your text editor and get familiar with the layout:

```
ResearchForge/
├── docs/           ← Start here. This is where most contribution happens right now.
├── .github/        ← Issue and PR templates
├── README.md       ← Project landing page
├── CONTRIBUTING.md ← Full contribution guide
├── CHANGELOG.md    ← Change history
└── LICENSE         ← MIT
```

Read [docs/FolderStructure.md](FolderStructure.md) for a full explanation of what each folder is for.

---

## Step 4 — Find Something to Work On

### Option A — Browse open issues

Go to [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) and filter by:

- `good first issue` — tasks specifically designed for first-time contributors
- `documentation` — documentation improvements (the primary contribution type right now)
- `help wanted` — tasks where community input is needed

### Option B — Spot something yourself

If you're reading the docs and notice something that is unclear, incorrect, incomplete, or missing — that is a valid contribution. Open an issue first (using the Documentation Improvement template) and discuss it before writing.

### Option C — Participate in a discussion

Some open issues are tagged `discussion`. These are topics where the community is working through a decision together. You don't need to write code — sharing your perspective and experience is a valuable contribution.

---

## Step 5 — Make Your First Contribution

Here is the complete workflow for a documentation contribution:

### 1. Pick an issue

Comment on the issue you plan to work on so others know it's taken.

### 2. Create a branch

```bash
git checkout -b docs/your-change-description
```

Branch naming convention: `docs/` prefix for documentation changes. See [docs/BranchingStrategy.md](BranchingStrategy.md).

### 3. Make your changes

Edit the relevant Markdown file. Keep changes focused — one issue per PR.

**Tips for good documentation:**
- Be specific. Vague documentation is worse than no documentation.
- Write for someone who has never seen the project before.
- Use examples where possible.
- Keep sentences short.
- If you're not sure about something, mark it clearly with `> TODO:` rather than writing something incorrect.

### 4. Preview your Markdown

If you're using VS Code, install the **Markdown Preview Enhanced** extension to see how your changes look before committing.

### 5. Commit your changes

```bash
git add .
git commit -m "docs: describe what you changed"
```

See [docs/BranchingStrategy.md](BranchingStrategy.md) for commit message format.

### 6. Push your branch

```bash
git push origin docs/your-change-description
```

### 7. Open a Pull Request

Go to your fork on GitHub. You'll see a prompt to create a PR. Click it, fill in the template, and submit.

A maintainer will review your PR within 72 hours during active development. They may leave comments or suggestions — this is normal and not a rejection.

---

## Step 6 — Ask for Help

Getting stuck is normal. Here's how to get help:

- **Open a Question issue** — Use the Question issue template on GitHub. There are no bad questions.
- **Comment on the relevant issue** — If you're stuck on something related to a specific issue, comment there.
- **Read the FAQ** in [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## What to Expect Next

Once you've made your first documentation contribution:

- The maintainer will review and merge it (usually within 72 hours)
- You'll be credited as a contributor
- You can look for the next `good first issue` or `help wanted` issue
- As the project progresses into M1 and M2, code contribution opportunities will open up

Welcome aboard. We're glad you're here.

---

*See also: [CONTRIBUTING.md](../CONTRIBUTING.md) · [docs/BranchingStrategy.md](BranchingStrategy.md) · [docs/FolderStructure.md](FolderStructure.md)*
