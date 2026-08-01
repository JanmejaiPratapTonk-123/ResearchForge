# Features

> **Status: All features listed here are planned. None are implemented.**  
> This document describes what ResearchForge is designed to become. Feature status will be updated as implementation progresses through project milestones.

---

## Table of Contents

- [How to Read This Document](#how-to-read-this-document)
- [Status Legend](#status-legend)
- [Core Features](#core-features)
- [Collaboration Features](#collaboration-features)
- [Research Workflow Features](#research-workflow-features)
- [Platform Features](#platform-features)
- [How to Suggest a Feature](#how-to-suggest-a-feature)

---

## How to Read This Document

Each feature includes:

- **Description** — What the feature does and why it matters to researchers
- **User problem it solves** — The specific pain point it addresses
- **Milestone** — When it is planned to be implemented
- **Status** — Current state

This document does not contain implementation details. Implementation planning happens in [Architecture.md](Architecture.md).

---

## Status Legend

| Icon | Meaning |
|---|---|
| 🔴 Planned | Not yet designed or implemented |
| 🟡 In Design | Being actively designed; no code yet |
| 🟠 In Progress | Implementation underway |
| 🟢 Complete | Implemented, tested, and available |

---

## Core Features

### Semantic Search

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M2 — MVP |

**Description:** Find papers using natural language queries rather than exact keyword matching. Instead of typing `"transformer attention mechanism"`, a researcher can write `"papers about how neural networks decide which parts of input to focus on"` and receive relevant results.

**User problem:** Keyword search misses relevant papers that use different terminology and returns irrelevant papers that happen to share keywords. Researchers waste time hunting for papers they don't know exist.

**How it will work (planned):** Text is embedded into a vector space using a language model. Queries are embedded the same way. Papers are ranked by vector similarity to the query. Exact implementation depends on the tech stack decision.

---

### Knowledge Graph

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M3 — Alpha |

**Description:** Automatically extract and visualize relationships between concepts, authors, and papers. A researcher can see which papers cite each other, which concepts appear together, and how ideas flow across the literature over time.

**User problem:** Reading papers individually gives no structural view of a field. Researchers spend significant time manually mapping relationships that could be computed automatically.

---

### AI-Assisted Summarization

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M3 — Alpha |

**Description:** Generate concise summaries of papers, extract key contributions, methodology, and findings. Summaries are context-aware — a researcher can ask "how does this paper differ from the previous one I read?"

**User problem:** Reading the full text of every relevant paper is not feasible at scale. Researchers need ways to quickly assess relevance and understand key contributions before committing to a full read.

---

### Paper Ingestion

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M2 — MVP |

**Description:** Add papers to ResearchForge by submitting a DOI, arXiv ID, or URL. The system fetches metadata (title, authors, abstract, publication date) and stores it for search and organization.

**User problem:** Collecting papers from multiple sources into a single, structured system is tedious and error-prone when done manually.

---

### Citation Management

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | v1.0 |

**Description:** Organize references with rich metadata. Export citation lists in BibTeX, APA, MLA, and other standard formats for use in manuscripts and reference managers.

**User problem:** Researchers maintain citations in separate tools (Zotero, Mendeley, spreadsheets) that don't connect to their reading and annotation workflow.

---

## Collaboration Features

### Collaborative Workspaces

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | v1.0 |

**Description:** Create shared workspaces where research teams can collect papers, share annotations, build shared knowledge graphs, and see each other's reading history and notes.

**User problem:** Research collaboration today relies on email threads, shared folders, and ad-hoc tools. There is no unified place for a team to build shared knowledge.

---

### Annotations and Notes

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M3 — Alpha |

**Description:** Highlight passages and add structured notes directly to papers within ResearchForge. Notes are searchable and can be linked across papers.

**User problem:** Annotations made in PDF readers (Acrobat, Zotero, Hypothesis) don't connect to the researcher's broader knowledge base.

---

## Research Workflow Features

### Research Workflow Automation

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | Future (post v1.0) |

**Description:** Define custom pipelines for common research tasks: systematic literature review, citation network analysis, gap identification, and hypothesis generation.

**User problem:** Many research workflows involve repetitive, structured steps that could be partially automated without sacrificing scientific rigor.

---

## Platform Features

### User Authentication

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | M2 — MVP |

**Description:** Secure account creation and login. Personal workspaces tied to user accounts.

---

### Extensible Plugin Architecture

| | |
|---|---|
| **Status** | 🔴 Planned |
| **Milestone** | Future (post v1.0) |

**Description:** A well-defined API and plugin system allowing teams to integrate ResearchForge with their existing tools — institutional repositories, reference managers, writing tools, and custom data sources.

---

## How to Suggest a Feature

1. Search [existing issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) to check if your idea has already been raised.
2. Open a new issue using the **Feature Request** template.
3. Describe the researcher problem you are trying to solve, not just the technical solution.
4. The maintainer will triage, discuss, and add validated features to this document.

---

*Last updated: August 2026*  
*See also: [Vision.md](Vision.md) · [Roadmap.md](Roadmap.md) · [Architecture.md](Architecture.md)*
