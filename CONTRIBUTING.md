# Contributing to ResearchForge

Thank you for your interest in contributing to ResearchForge! This project is part of **IEEE Summer of Code 2026** and is in its early planning and development phase. Every contribution — whether documentation, UI design, architecture discussion, or code — makes a real difference.

> 🚀 **First time contributing to ResearchForge?**  
> Read our 15-minute step-by-step onboarding walkthrough first: **[docs/GettingStarted.md](docs/GettingStarted.md)**.  
> Use this document (`CONTRIBUTING.md`) as your canonical reference guide for contribution rules, workflow policies, and git conventions.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Project Philosophy](#project-philosophy)
- [What If I Don't Know the Tech Stack?](#what-if-i-dont-know-the-tech-stack)
- [Maintainer Responsiveness SLA](#maintainer-responsiveness-sla)
- [Issue Assignment Workflow](#issue-assignment-workflow)
- [Branch Naming & Git Conventions](#branch-naming--git-conventions)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Review Process](#review-process)
- [Communication & FAQ](#communication--faq)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards.

---

## Project Philosophy

ResearchForge is built in the open:
- **Transparency over perfection:** We document decisions as we make them.
- **Honesty about status:** We never present planned features as implemented.
- **Collaboration over speed:** Thoughtful contributions with good context win.
- **Accessibility first:** Beginners are just as valued as experienced maintainers.

---

## What If I Don't Know the Tech Stack?

**You do NOT need to know our future code stack to contribute today!**

ResearchForge is in early planning (Milestone 0 & Milestone 1). We actively need non-code and early-stage contributions across multiple skill areas:

| If your skill / background is... | You can work on... |
|---|---|
| **Graphic Design / UI** | Project logo, README banner, landing page wireframes |
| **System Design / Architecture** | Architecture diagram improvements, technical comparisons (e.g. Auth options, Vector DBs) |
| **Technical Writing** | Documentation clarity, guide structure, fixing broken links |
| **Research / Academia** | User problem statements, citation format specs, feature requirements |
| **Frontend / Backend / AI** | Technology evaluation discussions, scaffolding proposals for M1 |

---

## Maintainer Responsiveness SLA

We value your time and effort. Project maintainers commit to the following response times:

- **Questions & Discussions:** Acknowledged within **24 to 48 hours**
- **Issue Triage & Labeling:** Processed within **48 hours**
- **Pull Request Reviews:** Initial review within **72 hours**

If you don't receive a response within these windows, feel free to leave a gentle reminder comment on the issue or PR!

---

## Issue Assignment Workflow

To prevent duplicate effort and ensure fair opportunities for all contributors:

### 1. Finding an issue
Browse [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues). Filter by labels:
- `good first issue` — approachable tasks for first-time contributors
- `help wanted` — open tasks seeking community help
- `documentation` / `design` / `discussion` — non-code contribution categories

### 2. Requesting assignment
- Leave a comment on the issue stating: *"I'd like to work on this issue. Please assign it to me."*
- **Wait for a maintainer to assign the issue to you** before opening a PR.
- Please request **only one issue at a time** so everyone gets a chance to participate.

### 3. Assignment duration & unassignment
- Once assigned, you have **7 days** to open a draft PR or post an update.
- If there is no activity or update for **7 days**, the issue may be unassigned and released to other contributors.
- If you get busy and can no longer work on an assigned issue, please comment to release it — we appreciate your honesty!

---

## Branch Naming & Git Conventions

Use the following convention for all branch names:

```
<type>/<short-description>
```

| Type | Purpose | Example |
|---|---|---|
| `docs/` | Documentation changes | `docs/update-getting-started` |
| `design/` | Asset, logo, diagram additions | `design/readme-banner` |
| `feat/` | New features | `feat/paper-search-endpoint` |
| `fix/` | Bug fixes | `fix/broken-link-in-readme` |
| `chore/` | Maintenance, config, dependencies | `chore/update-gitignore` |
| `refactor/` | Code restructuring without behavior change | `refactor/api-router` |

> 📖 **Quick Reference:** Need a command cheat-sheet? See **[docs/BranchingStrategy.md](docs/BranchingStrategy.md)** for step-by-step git commands and rebase instructions.

---

## Commit Message Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format
```
<type>(<optional scope>): <short description>

[optional body]

[optional footer]
```

### Allowed Types
`feat`, `fix`, `docs`, `design`, `chore`, `refactor`, `test`, `ci`, `style`

### Rules
- Use imperative mood: `"add"` not `"added"`, `"fix"` not `"fixed"`.
- Keep first line under **72 characters**.
- Link related issues in footer: `Closes #42` or `Refs #17`.

---

## Pull Request Process

1. **Fill in the PR template completely.**
2. **Focus on a single concern.** Don't bundle unrelated changes.
3. **Reference the issue** resolved using `Closes #<number>`.
4. **Self-review your diff** before requesting review.
5. **Mark as Draft** if work is still in progress.

---

## Coding Standards

Detailed coding standards will be finalized in Milestone 1. General principles:
- **Clarity over cleverness.**
- **Readable variable and function names.**
- **No secrets or credentials in commits.**
- See [docs/CodingStandards.md](docs/CodingStandards.md) for current writing and documentation standards.

---

## Review Process

All pull requests are reviewed by a project maintainer.
- Reviewers evaluate accuracy, clarity, adherence to conventions, and scope.
- Review feedback is constructive. If changes are requested, update your branch and push — the PR will update automatically.

---

## Communication & FAQ

- **Primary Channel:** [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) and GitHub Discussions.
- **Code of Conduct:** [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

### FAQ

**Q: Is it too early to contribute?**  
A: No! Milestone 0 and Milestone 1 are ideal for design, architecture, research, and documentation contributions.

**Q: How long does review take?**  
A: Maintainers aim for 72 hours max.

**Q: Can I work on an unassigned issue?**  
A: Comment on the issue first to get assigned before writing code or opening a PR!

---

👉 **Next Step:** Ready to get started? Read the step-by-step walkthrough in **[docs/GettingStarted.md](docs/GettingStarted.md)** *(⏱️ ~5 min read)*!
