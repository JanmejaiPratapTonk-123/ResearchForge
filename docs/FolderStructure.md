# Folder Structure

This document explains the purpose, contents, and conventions for every folder in the ResearchForge repository. Use this reference when deciding where your contribution belongs.

---

## Repository Map

```
ResearchForge/
├── .github/           # GitHub templates, workflows, and CI configuration
├── ai-services/       # AI/ML microservices (embeddings, NLP) (M2)
├── assets/            # Static assets (logos, banners, architecture diagrams)
├── backend/           # Core API server and business logic (M2)
├── database/          # Schemas, migrations, and seed data (M2)
├── docs/              # Comprehensive project documentation
├── frontend/          # Web application UI (M2)
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md    # Canonical contribution reference manual
├── LICENSE
├── README.md          # Project landing page
└── SECURITY.md        # Security disclosure policy
```

---

## Directory Roles & Contributor Responsibilities

| Folder | What lives here | Who contributes here |
|---|---|---|
| [`docs/`](.) | All project guides, architecture specs, roadmap | Everyone, writers, tech leads |
| [`assets/`](../assets/) | Project logos, banners, diagrams, wireframes | UI/UX designers, graphic artists |
| [`frontend/`](../frontend/) | Web application UI components & pages | Frontend developers (React/Next) |
| [`backend/`](../backend/) | API routes, business logic, auth, models | Backend developers (Python/Node) |
| [`ai-services/`](../ai-services/) | Embedding pipelines, NLP, summarization | AI/ML engineers |
| [`database/`](../database/) | Database schemas, vector indices, migrations | Data & database engineers |
| [`.github/`](../.github/) | Issue/PR templates, CI workflows | DevOps & maintainers |

---

👉 **Next Step:** Ready to contribute? Check our **[docs/GettingStarted.md](GettingStarted.md)** *(⏱️ ~5 min read)* guide!
