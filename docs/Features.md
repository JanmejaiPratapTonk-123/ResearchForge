# Features

> **Status: All features listed here are planned for future milestones. None are implemented yet.**  
> Feature status will be updated as implementation progresses through project milestones.

---

## Table of Contents

- [Core Features](#core-features)
- [Collaboration Features](#collaboration-features)
- [Research Workflow Features](#research-workflow-features)
- [Platform Features](#platform-features)
- [How to Suggest a Feature](#how-to-suggest-a-feature)

---

## Core Features

### Semantic Search *(Planned — Milestone 2)*
Find papers using natural language queries rather than exact keyword matching. Queries are embedded into vector space to retrieve papers by semantic meaning.

> **Implementation:** `sentence-transformers` (`all-MiniLM-L6-v2`) via FastAPI AI service. Embeddings stored and queried in PostgreSQL using the `pgvector` extension.

### Knowledge Graph *(Planned — Milestone 3)*
Automatically extract and visualize relationships between concepts, authors, and papers.

### AI-Assisted Summarization *(Planned — Milestone 3)*
Generate concise summaries of papers, extracting methodology, key findings, and contributions.

### Paper Ingestion *(Planned — Milestone 2)*
Add papers by submitting a DOI, arXiv ID, or URL to automatically fetch metadata.

### Citation Management *(Planned — v1.0)*
Organize references with rich metadata and export citations in BibTeX, APA, and MLA formats.

---

## Collaboration Features

### Collaborative Workspaces *(Planned — v1.0)*
Shared workspaces where research teams collect papers, share annotations, and build shared knowledge graphs.

### Annotations and Notes *(Planned — Milestone 3)*
Highlight passages and add structured, searchable notes directly to papers.

---

## Research Workflow Features

### Research Workflow Automation *(Planned — Post v1.0)*
Custom pipelines for systematic literature reviews, gap analysis, and hypothesis generation.

---

## How to Suggest a Feature

1. Check existing issues on [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues).
2. Open a new issue using the **Feature Request** template.
3. Describe the researcher problem you want to solve!

---

👉 **Next Step:** Review the project development roadmap in **[docs/Roadmap.md](Roadmap.md)** *(⏱️ ~3 min read)*!
