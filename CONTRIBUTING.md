# Contributing to ResearchForge

Thank you for your interest in contributing to ResearchForge. This project is part of **IEEE Summer of Code 2026** and is in its early planning and development phase. Every contribution — whether documentation, design, architecture discussion, or eventually code — makes a real difference.

This guide will help you understand how the project is organized, what you can contribute right now, and how to work with the team effectively.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Project Philosophy](#project-philosophy)
- [Ways to Contribute](#ways-to-contribute)
- [Your First Contribution](#your-first-contribution)
- [Issue Workflow](#issue-workflow)
- [Branch Naming](#branch-naming)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Review Process](#review-process)
- [Communication](#communication)
- [Recognition](#recognition)
- [FAQ](#faq)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards. Violations can be reported to the project maintainer.

---

## Project Philosophy

ResearchForge is being built in the open. This means:

- **Transparency over perfection.** We document decisions as we make them, including the ones we're still unsure about.
- **Honesty about status.** We never present planned features as implemented. If something doesn't exist yet, we say so.
- **Collaboration over speed.** We prefer thoughtful contributions with good context over rushed submissions.
- **Accessibility first.** First-time contributors are just as valued as experienced ones.

---

## Ways to Contribute

Because ResearchForge is in the planning and early development phase, the most impactful contributions right now are:

### Right now (no code required)
- **Documentation** — Improve or expand `docs/`, fix typos, add clarity
- **Architecture discussion** — Share ideas on system design in GitHub Issues
- **Tech stack discussion** — Help evaluate technology choices
- **Design** — Create a project logo, banner, or UI mockups
- **Requirements** — Help define and refine planned features

### Soon (once architecture is finalized)
- **Backend development** — API design and implementation
- **Frontend development** — UI components and pages
- **AI services** — Embedding, summarization, NLP pipelines
- **Testing** — Unit, integration, and end-to-end tests
- **DevOps** — CI/CD pipelines, Docker configuration

If you are unsure whether your idea fits, open an issue first and discuss it before building.

---

## Your First Contribution

If this is your first time contributing to an open-source project, here is a step-by-step guide for making a documentation contribution (the best place to start right now).

### Step 1 — Fork the repository

Click the **Fork** button at the top-right of the [ResearchForge repository](https://github.com/JanmejaiPratapTonk-123/ResearchForge).

### Step 2 — Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/ResearchForge.git
cd ResearchForge
```

### Step 3 — Create a branch

```bash
git checkout -b docs/your-change-description
```

See [Branch Naming](#branch-naming) for conventions.

### Step 4 — Make your changes

Edit the relevant Markdown files in `docs/` or the root. Keep changes focused — one topic per PR.

### Step 5 — Commit your changes

```bash
git add .
git commit -m "docs: describe what you changed"
```

See [Commit Message Conventions](#commit-message-conventions) for the format.

### Step 6 — Push your branch

```bash
git push origin docs/your-change-description
```

### Step 7 — Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**. Fill in the PR template and submit.

A maintainer will review your PR, leave feedback if needed, and merge it once it's ready.

---

## Issue Workflow

### Reporting a bug

1. Search [existing issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) to check it isn't already reported.
2. Open a new issue using the **Bug Report** template.
3. Fill in all sections — incomplete reports are harder to act on.

### Requesting a feature

1. Search existing issues to check it hasn't already been requested.
2. Open a new issue using the **Feature Request** template.
3. Describe the problem you are trying to solve, not just the solution you have in mind.

### Asking a question

Use the **Question** template. Questions are welcome — there are no bad ones.

### Improving documentation

Use the **Documentation Improvement** template to flag a specific document, page, or section that needs work.

### Working on an issue

- Comment on the issue to let others know you're working on it.
- If an issue has been assigned to someone, don't open a duplicate PR without discussion.
- For significant changes, discuss the approach in the issue before starting work.

---

## Branch Naming

Use the following convention for all branches:

```
<type>/<short-description>
```

| Type | When to use |
|---|---|
| `docs/` | Documentation changes |
| `feat/` | New features |
| `fix/` | Bug fixes |
| `chore/` | Maintenance, config, tooling |
| `refactor/` | Code restructuring (no behavior change) |
| `test/` | Adding or updating tests |
| `ci/` | CI/CD pipeline changes |

**Examples:**

```bash
docs/improve-architecture-overview
feat/paper-search-endpoint
fix/broken-link-in-readme
chore/add-python-gitignore
```

- Use lowercase and hyphens only.
- Keep descriptions short and meaningful.
- Branch off from `main` unless otherwise instructed.

See [docs/BranchingStrategy.md](docs/BranchingStrategy.md) for the full branching workflow.

---

## Commit Message Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<optional scope>): <short description>

[optional body]

[optional footer]
```

### Types

| Type | Purpose |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `chore` | Maintenance tasks, config, tooling |
| `refactor` | Code changes that don't fix a bug or add a feature |
| `test` | Adding or updating tests |
| `ci` | CI/CD changes |
| `style` | Formatting, whitespace (no logic change) |

### Examples

```bash
docs: add architecture overview to Vision.md
feat(search): add paper search endpoint skeleton
fix: correct broken link in CONTRIBUTING.md
chore: add Python entries to .gitignore
```

### Rules

- Use the **imperative mood** in the description: "add" not "added", "fix" not "fixed".
- Keep the first line under **72 characters**.
- Reference related issues in the footer: `Closes #42` or `Refs #17`.
- Do not end the subject line with a period.

---

## Pull Request Process

1. **Fill in the PR template** completely. Incomplete PRs will be returned for more information.
2. **One concern per PR.** Don't bundle unrelated changes.
3. **Reference the issue** your PR addresses using `Closes #<issue-number>` or `Refs #<issue-number>`.
4. **Self-review your diff** before requesting review. Read every line you've changed.
5. **Mark as Draft** if your PR isn't ready for review — use it to share work in progress.
6. **Be responsive** to review feedback. PRs with no response for 14 days may be closed.

The maintainer aims to review PRs within **72 hours** during active development. Response times may vary during project phases.

---

## Coding Standards

> **Note:** Detailed coding standards are under development and will be finalized when the tech stack is confirmed. See [docs/CodingStandards.md](docs/CodingStandards.md).

General principles that apply regardless of language:

- **Readable over clever.** Code is read far more often than it is written.
- **Small, focused changes.** One PR should do one thing.
- **Meaningful names.** Variables, functions, and files should describe their purpose.
- **Add comments where the "why" isn't obvious.** Don't comment on what the code does — explain why it does it that way.
- **Don't leave commented-out code in PRs.** Use git history instead.

---

## Review Process

All contributions go through at least one maintainer review before merging.

### What reviewers look for

- Does the change align with the project's direction?
- Is the code (or documentation) clear and accurate?
- Does it follow the conventions in this guide?
- Are there edge cases or gaps that should be addressed?

### Responding to feedback

- Review comments are suggestions, not personal criticism.
- If you disagree with feedback, explain your reasoning politely.
- Mark comments as resolved once you've addressed them.
- Request a re-review after making significant changes.

---

## Communication

- **GitHub Issues** — For bugs, features, questions, and documentation improvements. This is the primary communication channel.
- **Pull Request comments** — For discussion directly related to a specific change.
- **Issue discussions** — For broader topics, architecture debates, and decisions.

When in doubt, open an issue. It creates a permanent, searchable record of the conversation.

---

## Recognition

All contributors are recognized in the project. Significant contributors may be invited to become project collaborators with commit access or review responsibilities over time.

---

## FAQ

**Q: The project is in early development — is it too early to contribute?**  
A: No. This is exactly the right time. Documentation and architecture discussions now shape everything that gets built later. Your input matters most at this stage.

**Q: I found a typo. Is that worth a PR?**  
A: Yes. Small improvements add up. Fix it, commit it, open a PR.

**Q: I have an idea for the architecture. Where do I share it?**  
A: Open a GitHub Issue using the Feature Request or Question template. Tag it as a `discussion`.

**Q: How long does it take for a PR to get reviewed?**  
A: The maintainer aims for 72 hours. During busy periods it may take longer.

**Q: Can I pick up an issue that was already assigned?**  
A: Comment on the issue first. If there's been no activity for more than 2 weeks, the assignment may be released.

**Q: What if I break something?**  
A: That's what code review is for. Open your PR, describe what you changed, and the team will help.
