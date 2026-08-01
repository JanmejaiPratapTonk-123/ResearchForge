# Coding Standards

> **Status: Under Development**  
> Detailed coding standards will be finalized in Milestone 1 once the tech stack is confirmed. This document defines the general principles that apply now, and will be expanded with language- and framework-specific rules as decisions are made.

---

## Table of Contents

- [General Principles](#general-principles)
- [Documentation Standards](#documentation-standards)
- [Language-Specific Standards](#language-specific-standards)
- [Commit and PR Standards](#commit-and-pr-standards)
- [What Will Be Added in M1](#what-will-be-added-in-m1)

---

## General Principles

These principles apply regardless of language, framework, or the type of contribution.

### Clarity over cleverness

Code should be written to be read by humans. If a piece of code requires a comment to explain what it does, consider whether the code itself can be made clearer first. Use comments to explain **why**, not **what**.

**Preferred:**
```python
# Limit results to avoid overwhelming the UI at this stage
MAX_SEARCH_RESULTS = 20
```

**Avoid:**
```python
MSR = 20  # max
```

### Small, focused contributions

Each pull request should do one thing. A PR that adds a feature, refactors two modules, and fixes a bug is a PR that is difficult to review and difficult to revert if something goes wrong. Break work into logical, reviewable units.

### Meaningful names

Variables, functions, classes, files, and modules should describe their purpose clearly.

- `paper_embeddings` instead of `pe` or `data`
- `get_paper_by_doi` instead of `get` or `fetch_thing`
- `SearchResultCard.jsx` instead of `Card2.jsx`

### Don't leave dead code

Do not commit commented-out code, unused variables, or unused imports. If code is being removed, remove it — Git history preserves the old version.

### Consistent formatting

All code will be formatted using the project's configured formatters (to be defined in M1). Do not manually format code — run the formatter before committing.

### No secrets in commits

Never commit API keys, passwords, tokens, credentials, or private URLs — even in comments or example files. Use `.env.example` files with placeholder values instead. The `.gitignore` is configured to exclude `.env` files.

---

## Documentation Standards

These standards apply now, since documentation is the primary contribution type.

### Writing style

- Write in clear, professional English.
- Use the **second person** ("you") when addressing the reader.
- Use the **present tense** ("This guide explains..." not "This guide will explain...").
- Use **active voice** where possible.
- Keep sentences short. If a sentence needs more than one comma, split it.

### Markdown formatting

- Use ATX-style headings (`#`, `##`, `###`) — not underline style.
- Use fenced code blocks with language identifiers (` ```bash `, ` ```python `).
- Use tables for structured comparisons — not nested bullet lists.
- Use `**bold**` for emphasis; use `_italic_` sparingly.
- Do not skip heading levels (don't jump from `##` to `####`).
- Every document should have a `## Table of Contents` if it is longer than ~50 lines.

### Internal links

- Use relative links: `[Architecture](Architecture.md)` not `[Architecture](https://github.com/.../Architecture.md)`.
- Verify links are correct before committing — broken links are bugs.

### Status labels

Use consistent status markers across all documentation:

| Label | Meaning |
|---|---|
| 🔴 Planned | Not started |
| 🟡 In Progress | Actively being worked on |
| 🟠 In Review | Submitted for review |
| 🟢 Complete | Done and merged |

---

## Language-Specific Standards

> These sections will be completed in Milestone 1 once the tech stack is confirmed.

### Python

*To be defined — depends on framework selection (FastAPI, Django, etc.)*

Will cover:
- Formatter (`black` or `ruff format`)
- Linter (`ruff`, `flake8`)
- Type annotations (`mypy`)
- Docstring format (Google-style or NumPy-style)
- Test framework (`pytest`)

### JavaScript / TypeScript

*To be defined — depends on framework selection (React, Vue, Svelte, etc.)*

Will cover:
- Formatter (`prettier`)
- Linter (`eslint`)
- TypeScript strictness settings
- Component naming conventions
- Test framework (`vitest`, `jest`)

---

## Commit and PR Standards

These are enforced now. See [CONTRIBUTING.md](../CONTRIBUTING.md) and [BranchingStrategy.md](BranchingStrategy.md) for the full details.

**Summary:**
- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Branch names: `type/short-description`
- One concern per PR
- Fill in the PR template completely
- Self-review your diff before requesting review

---

## What Will Be Added in M1

When the tech stack is confirmed, this document will be expanded with:

- Language-specific formatter and linter configurations
- Specific rules for each service (frontend, backend, AI services)
- Test coverage requirements
- API contract conventions
- Database schema naming conventions
- Error handling patterns

If you have experience setting up code quality tooling for your preferred languages or frameworks and want to contribute, open a **Documentation Improvement** issue and propose your recommendations.

---

*See also: [CONTRIBUTING.md](../CONTRIBUTING.md) · [BranchingStrategy.md](BranchingStrategy.md) · [DeveloperGuide.md](DeveloperGuide.md)*
