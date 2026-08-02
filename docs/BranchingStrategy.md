# Git Branching Strategy — Quick Reference

> 📖 **Full Policy Reference:** For detailed contribution rules and PR guidelines, see **[CONTRIBUTING.md](../CONTRIBUTING.md)**.

---

## Branch Naming Cheat-Sheet

Format: `<type>/<short-description>`

| Type | Purpose | Example |
|---|---|---|
| `docs/` | Documentation improvements | `docs/fix-readme-links` |
| `design/` | Asset, logo, diagram additions | `design/add-project-banner` |
| `feat/` | New features | `feat/semantic-search-api` |
| `fix/` | Bug fixes | `fix/null-pointer-search` |
| `chore/` | Maintenance & tooling | `chore/update-link-check` |
| `refactor/` | Code structure improvements | `refactor/router-middleware` |

---

## Step-by-Step Git Commands

```bash
# 1. Update your local main branch
git checkout main
git fetch upstream
git rebase upstream/main

# 2. Create a new branch
git checkout -b docs/your-change-description

# 3. Stage and commit your changes
git add .
git commit -m "docs: describe your change clearly"

# 4. Push branch to your fork
git push origin docs/your-change-description

# 5. Keeping branch updated with main (if needed)
git fetch upstream
git rebase upstream/main
git push origin docs/your-change-description --force-with-lease
```

---

## Commit Message Format

```
<type>(<scope>): <short description in imperative mood>

[optional body explaining WHY]
[optional footer: Closes #12]
```

**Example:** `docs: update getting started onboarding guide`

---

👉 **Next Step:** Return to the onboarding walkthrough in **[docs/GettingStarted.md](GettingStarted.md)** *(⏱️ ~5 min read)*!
