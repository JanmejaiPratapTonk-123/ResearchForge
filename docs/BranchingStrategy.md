# Branching Strategy

This document defines the Git branching workflow for ResearchForge. Following these conventions ensures that the repository history is clean, contribution is predictable, and reviews are manageable.

---

## Table of Contents

- [Main Branch](#main-branch)
- [Branch Naming Convention](#branch-naming-convention)
- [Branch Types](#branch-types)
- [Workflow Step by Step](#workflow-step-by-step)
- [Commit Message Convention](#commit-message-convention)
- [Draft Pull Requests](#draft-pull-requests)
- [Keeping Your Branch Up to Date](#keeping-your-branch-up-to-date)
- [Release Branching](#release-branching)
- [FAQ](#faq)

---

## Main Branch

The `main` branch is the single source of truth for the project.

**Rules:**
- `main` is always in a stable, reviewable state
- Direct commits to `main` are not allowed (except emergency hotfixes by the maintainer)
- All changes to `main` go through a pull request and review
- When runnable code exists: `main` must always pass CI

---

## Branch Naming Convention

```
<type>/<short-description>
```

- All lowercase
- Words separated by hyphens
- Short — describe the change, not your thought process
- No special characters other than hyphens

**Examples:**

```bash
docs/improve-architecture-overview
feat/paper-search-endpoint
fix/broken-link-in-readme
chore/add-python-gitignore-entries
refactor/reorganize-api-routes
test/add-embedding-unit-tests
ci/add-lint-workflow
```

---

## Branch Types

| Type | Purpose | Example |
|---|---|---|
| `docs/` | Documentation changes only | `docs/update-roadmap-milestones` |
| `feat/` | New feature or enhancement | `feat/semantic-search-api` |
| `fix/` | Bug fix | `fix/null-pointer-in-search` |
| `chore/` | Maintenance, config, tooling, dependencies | `chore/update-gitignore` |
| `refactor/` | Code restructuring without behavior change | `refactor/extract-auth-middleware` |
| `test/` | Adding or improving tests | `test/paper-ingestion-edge-cases` |
| `ci/` | CI/CD configuration changes | `ci/add-pytest-workflow` |
| `release/` | Release preparation (maintainer only) | `release/v0.2.0` |

---

## Workflow Step by Step

### For contributors

```bash
# 1. Start from an up-to-date main
git checkout main
git pull upstream main

# 2. Create your branch
git checkout -b docs/your-change-description

# 3. Make your changes
# (edit files)

# 4. Stage and commit
git add .
git commit -m "docs: describe what changed"

# 5. Push to your fork
git push origin docs/your-change-description

# 6. Open a Pull Request on GitHub
# → Go to your fork → "Compare & pull request"
# → Fill in the PR template
# → Submit
```

### After review

```bash
# If changes are requested, make them on the same branch:
git add .
git commit -m "docs: address review feedback"
git push origin docs/your-change-description
# The PR will update automatically
```

---

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<optional scope>): <short description>

[optional body — explain WHY if not obvious]

[optional footer — e.g., Closes #42]
```

### Types

| Type | Purpose |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `chore` | Maintenance, config, build |
| `refactor` | Code restructure (no behavior change) |
| `test` | Adding or updating tests |
| `ci` | CI/CD changes |
| `style` | Formatting, whitespace (no logic change) |
| `perf` | Performance improvements |
| `revert` | Reverts a previous commit |

### Rules

- First line: **72 characters max**
- Use the **imperative mood**: "add", "fix", "update" — not "added", "fixed", "updated"
- Reference related issues in the footer: `Closes #42`, `Refs #17`
- Do not end the subject line with a period

### Examples

```bash
# Good
docs: add branching strategy guide
feat(search): add semantic search endpoint skeleton
fix: correct broken internal link in CONTRIBUTING.md
chore: add Python virtual environment to .gitignore

# Not good
Updated README
fixed stuff
WIP changes
```

---

## Draft Pull Requests

Use **Draft PRs** when:

- You want early feedback on your approach before the work is complete
- You want to share a work-in-progress for discussion
- You're blocked and need input on how to continue

To open a Draft PR: click the dropdown arrow next to "Create pull request" and select "Create draft pull request".

**Do not mark a Draft PR as ready for review until it is genuinely ready.** If you're unsure, leave it as a Draft and ask in a comment.

---

## Keeping Your Branch Up to Date

If your branch falls behind `main` (e.g., other PRs have been merged), bring it up to date:

```bash
# Fetch latest upstream changes
git fetch upstream

# Rebase your branch onto main (preferred — keeps history clean)
git rebase upstream/main

# Resolve any conflicts, then continue:
git rebase --continue

# Force-push your updated branch
git push origin your-branch-name --force-with-lease
```

> **Why rebase instead of merge?**  
> Rebasing produces a linear history that is easier to read and bisect. It also avoids merge commits in feature branches that can clutter the git log.

If you are uncomfortable with rebase, merging is acceptable — open a question issue or ask in your PR.

---

## Release Branching

> This section applies to the maintainer only. Contributors do not create release branches.

When preparing a release:

```bash
# Create release branch from main
git checkout -b release/v0.x.0 main

# Bump version, update CHANGELOG.md, etc.
# Open a PR from release/v0.x.0 → main

# After merge, tag the release
git tag -a v0.x.0 -m "Release v0.x.0"
git push origin v0.x.0
```

---

## FAQ

**Q: Should I branch from `main` or from another contributor's branch?**  
A: Always branch from `main`, unless you are explicitly building on someone else's unmerged work (in which case, branch from their branch and note this in your PR description).

**Q: My PR has a merge conflict. What do I do?**  
A: Rebase your branch on the latest `main` (see [Keeping Your Branch Up to Date](#keeping-your-branch-up-to-date)). Resolve conflicts locally, then push. If you get stuck, comment on your PR and ask for help.

**Q: Can I rewrite my commit history before opening a PR?**  
A: Yes — interactive rebase (`git rebase -i`) to squash, reword, or reorder commits on your branch is encouraged before opening a PR. Do not rewrite history after a PR is open and has reviews.

**Q: How do I update my fork's `main` branch?**  
A: 
```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

---

*See also: [CONTRIBUTING.md](../CONTRIBUTING.md) · [CodingStandards.md](CodingStandards.md)*
