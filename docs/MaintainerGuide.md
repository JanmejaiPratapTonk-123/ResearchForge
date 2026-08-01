# Maintainer Guide

> This guide is for project administrators and maintainers of ResearchForge. It documents the workflows, policies, and checklists that keep the project running smoothly.

---

## Table of Contents

- [Roles and Responsibilities](#roles-and-responsibilities)
- [Issue Triage](#issue-triage)
- [Pull Request Review](#pull-request-review)
- [Merge Policy](#merge-policy)
- [Label Management](#label-management)
- [Contributor Onboarding](#contributor-onboarding)
- [Release Process](#release-process)
- [Repository Maintenance](#repository-maintenance)
- [Escalation and Conflict Resolution](#escalation-and-conflict-resolution)

---

## Roles and Responsibilities

### Maintainer

Currently: [@JanmejaiPratapTonk-123](https://github.com/JanmejaiPratapTonk-123)

Responsibilities:

- Review and merge pull requests
- Triage and label incoming issues
- Update roadmap and milestone tracking
- Onboard new contributors
- Ensure documentation stays accurate
- Make final architectural and technology decisions (with community input)
- Manage releases

### Collaborators

As the project grows, trusted contributors may be granted collaborator access. Collaborators can:

- Be assigned as reviewers on PRs
- Label and triage issues
- Approve but not merge PRs (by maintainer policy — final merge is always by maintainer)

---

## Issue Triage

Triage should happen within **48 hours** of an issue being opened.

### Triage steps

1. **Read the issue** in full. Is it complete? Does it use the correct template?
2. **Apply labels** (see [Label Management](#label-management))
3. **Respond** with acknowledgment, clarification request, or resolution
4. **Assign** to yourself or a contributor if there's a clear owner
5. **Close** immediately if it is a duplicate, off-topic, or clearly invalid — with a polite explanation

### Issue states

| State | Action |
|---|---|
| Incomplete / missing template | Comment asking for the required information. Label `question` if unclear. |
| Duplicate | Link to the original, close this one. |
| Valid bug | Label `bug`. Prioritize if it blocks contributions. |
| Valid feature request | Label `enhancement`. Add to appropriate milestone backlog if approved. |
| Documentation gap | Label `documentation`. Add to M0 backlog if relevant now. |
| Question | Label `question`. Answer directly if you know; invite community input if not. |
| `good first issue` | Only apply this label if the issue is genuinely self-contained and approachable for a newcomer. |

### Questions to ask when triaging

- Does this belong in this repository?
- Is this a bug, a feature request, a question, or a discussion?
- Is the issue reproducible / actionable?
- Does it fit the current milestone or a future one?
- Is it a `good first issue` that can be handed to a new contributor?

---

## Pull Request Review

### Review timeline

Aim to provide an initial review within **72 hours** of PR submission. If you need more time, leave a comment so the contributor knows their PR hasn't been forgotten.

### Review checklist

Before merging any PR, verify:

**Content**
- [ ] The change does what it says it does
- [ ] The change is accurate (no incorrect information for documentation PRs)
- [ ] The change doesn't duplicate or contradict existing content
- [ ] The change fits the project's current phase (don't merge invented implementation details)

**Quality**
- [ ] Markdown renders correctly (no broken formatting)
- [ ] All internal links work
- [ ] Writing is clear and professional
- [ ] No typos or grammatical errors

**Process**
- [ ] PR template is filled in
- [ ] Branch naming follows conventions (see [BranchingStrategy.md](BranchingStrategy.md))
- [ ] Commit messages follow Conventional Commits
- [ ] PR references the related issue (if any)
- [ ] PR is not bundling unrelated changes

**For code PRs (when applicable)**
- [ ] Code follows the conventions in [CodingStandards.md](CodingStandards.md)
- [ ] Tests are present for new functionality
- [ ] Tests pass
- [ ] No secrets, credentials, or sensitive information committed

### Leaving review feedback

- Be specific. Point to the exact line or section.
- Explain **why** something should change, not just that it should.
- Distinguish between required changes and optional suggestions. Use "Required:" and "Suggestion:" prefixes.
- Be kind. Reviews are about the work, not the person.

### If a PR is not ready

- Mark it as **Needs Changes** and explain what's required.
- Do not close a PR for effort made in good faith — help the contributor improve it.
- If a PR has had no activity for **14 days** after feedback, send a reminder. After **21 days** of silence, close it with a note that it can be reopened.

---

## Merge Policy

| PR type | Merge method | Who can merge |
|---|---|---|
| Documentation | Squash merge | Maintainer |
| Feature (code) | Squash merge | Maintainer |
| Bugfix | Squash merge | Maintainer |
| Release | Merge commit | Maintainer |

**Rules:**
- Never merge your own PR without at least one other reviewer (exception: emergency fixes or typo corrections)
- Always ensure CI passes before merging (once CI is configured in M1)
- Always delete the source branch after merging

---

## Label Management

Current labels and their meanings:

| Label | Color | When to use |
|---|---|---|
| `good first issue` | `#7057ff` | Self-contained, approachable for new contributors |
| `documentation` | `#0075ca` | Documentation-only changes |
| `discussion` | `#d4c5f9` | Topics for community input and debate |
| `enhancement` | `#a2eeef` | New features or improvements |
| `help wanted` | `#008672` | Community help is actively needed |
| `question` | `#d876e3` | Questions and clarifications |
| `bug` | `#d73a4a` | Something is broken or incorrect |

**Guidelines:**
- An issue can (and often should) have multiple labels.
- `good first issue` + `documentation` is the most common pairing for onboarding issues.
- Don't use `good first issue` for issues that require deep project knowledge.
- Review labels periodically and remove outdated ones.
- Add technology-specific labels (`frontend`, `backend`, `AI`) only after those modules actively exist.

---

## Contributor Onboarding

When a new contributor submits their first PR:

1. Welcome them in a PR comment.
2. Be extra patient and thorough in review — they are learning the workflow.
3. If the PR needs changes, explain gently and link to relevant guide sections.
4. After their PR is merged, thank them by name in the comment thread.
5. Consider assigning them a slightly more complex issue for their next contribution.

Goal: Every contributor's first experience should make them want to come back.

---

## Release Process

> **Current state:** The release process will be formalized in Milestone 1. This section outlines the planned approach.

### Planned release checklist

Before cutting a release:

- [ ] All milestone deliverables are complete
- [ ] `CHANGELOG.md` is updated with the full list of changes
- [ ] All documentation reflects the current state
- [ ] All tests pass (once CI is configured)
- [ ] Version number is updated (follows Semantic Versioning)
- [ ] Release branch is created from `main`
- [ ] Release is tagged in Git (`git tag v0.x.0`)
- [ ] GitHub Release is created with release notes
- [ ] CHANGELOG links are updated

### Version numbering

ResearchForge follows [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH`
- Increment `MAJOR` for breaking changes
- Increment `MINOR` for new backwards-compatible features
- Increment `PATCH` for backwards-compatible bug fixes

During pre-release (`0.x.x`), minor version increments may contain breaking changes.

---

## Repository Maintenance

### Weekly

- [ ] Review and triage any new issues
- [ ] Check for PRs awaiting review
- [ ] Respond to any unanswered comments

### Monthly

- [ ] Review and update milestone progress in `docs/Roadmap.md`
- [ ] Check that documentation is still accurate
- [ ] Review label usage — are labels being applied consistently?
- [ ] Close stale issues (no activity for 30+ days) with a polite note

### Per milestone

- [ ] Update `docs/Roadmap.md` with completed deliverables
- [ ] Update `CHANGELOG.md`
- [ ] Review and update `docs/Features.md` status columns
- [ ] Create the next milestone's issues

---

## Escalation and Conflict Resolution

### Code of Conduct violations

Follow the enforcement guidelines in [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md). Document the incident, apply graduated consequences (warning → temporary ban → permanent ban), and communicate the outcome privately to the reporter.

### Contributor disagreements

- Most disagreements about approach or design should be resolved in the issue thread.
- If a discussion becomes heated, pause it and give both parties time to reflect.
- The maintainer has final say on technical decisions, but should always explain the reasoning.

### Scope disagreements

If a contributor submits work that doesn't fit the project's direction:

1. Thank them for their effort
2. Explain specifically why it doesn't fit (with reference to Vision.md or Architecture.md)
3. Close the PR with a clear explanation
4. Suggest alternative ways they could contribute

---

*See also: [CONTRIBUTING.md](../CONTRIBUTING.md) · [BranchingStrategy.md](BranchingStrategy.md) · [CodingStandards.md](CodingStandards.md)*
