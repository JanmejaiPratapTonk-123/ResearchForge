# Folder Structure

This document explains the purpose, contents, and conventions for every folder in the ResearchForge repository. Use this as a reference when deciding where your contribution belongs.

---

## Table of Contents

- [Root Level](#root-level)
- [.github/](#github)
- [ai-services/](#ai-services)
- [assets/](#assets)
- [backend/](#backend)
- [database/](#database)
- [docs/](#docs)
- [frontend/](#frontend)
- [Folder Status](#folder-status)
- [Adding a New Top-Level Folder](#adding-a-new-top-level-folder)

---

## Root Level

```
ResearchForge/
├── .github/
├── ai-services/
├── assets/
├── backend/
├── database/
├── docs/
├── frontend/
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

### Root files

| File | Purpose |
|---|---|
| `README.md` | Project landing page. Entry point for all visitors. |
| `CONTRIBUTING.md` | Complete guide for contributors. |
| `CODE_OF_CONDUCT.md` | Community standards (Contributor Covenant). |
| `CHANGELOG.md` | Version history in Keep a Changelog format. |
| `LICENSE` | MIT License. Do not modify. |
| `.gitignore` | Files and folders excluded from version control. |

**Rule:** Do not add new files to the repository root without maintainer approval. Root-level files should only be community/project-level documents. Code, configuration, and service files belong in their respective subdirectories.

---

## .github/

```
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
│   ├── question.md
│   ├── documentation_improvement.md
│   └── config.yml
├── PULL_REQUEST_TEMPLATE.md
├── CODEOWNERS
└── workflows/         ← CI/CD pipelines (coming in M1)
```

**Purpose:** GitHub-specific configuration that controls how issues, PRs, and automation work.

**What belongs here:**
- Issue templates (YAML front matter + Markdown body)
- PR templates
- GitHub Actions workflow files
- CODEOWNERS

**What does not belong here:**
- Application code
- Documentation
- Configuration files for services

**Editing guidance:** Issue templates and PR templates are actively used by contributors. Change them carefully and update the PR template checklist when the contribution workflow evolves.

---

## ai-services/

```
ai-services/           ← Currently empty
```

**Purpose:** AI and machine learning microservices that power ResearchForge's intelligent features.

**Planned contents (once implementation begins in M2):**
- Text embedding service (semantic search)
- Summarization service
- NLP / entity extraction pipelines
- Each service in its own subdirectory with its own `README.md`

**Status:** Empty — implementation planned for Milestone 2.

**What belongs here:**
- Python scripts and packages for AI/ML tasks
- Model configuration and weights references (not the weights themselves)
- Service-level `README.md` files explaining setup and usage
- `requirements.txt` or `pyproject.toml` per service

**What does not belong here:**
- Business logic (belongs in `backend/`)
- Database queries
- Frontend components

---

## assets/

```
assets/                ← Currently empty
```

**Purpose:** Static assets used in the project — images, logos, diagrams, screenshots.

**Planned contents:**
- `logo.png` / `logo.svg` — Project logo
- `banner.png` — README banner image
- `screenshots/` — Application screenshots for documentation
- `diagrams/` — Architecture and flow diagrams (PNG/SVG exports)

**Status:** Empty — awaiting logo design and first application screenshots.

**What belongs here:**
- Images referenced in documentation (README, docs/*.md)
- Exported diagram files
- Brand assets

**What does not belong here:**
- Application-served static files (those belong in `frontend/public/` or equivalent)
- Binary files that are not visual assets
- Large files (use Git LFS if assets exceed ~1MB)

**Naming convention:** Use lowercase with hyphens. `architecture-diagram.png`, not `ArchDiagram.png`.

---

## backend/

```
backend/               ← Currently empty
```

**Purpose:** The core API server — business logic, authentication, data access, and coordination between AI services and the database.

**Planned contents (once implementation begins in M2):**
- API route handlers
- Business logic modules
- Authentication and authorization
- Data models and repository layer
- Tests
- Service-level `README.md` and setup instructions

**Status:** Empty — implementation planned for Milestone 2.

**What belongs here:**
- All server-side application logic
- API endpoint definitions
- Database interaction code (ORM models, queries)
- Authentication logic
- Backend-specific configuration

**What does not belong here:**
- Frontend code
- AI/ML model code (belongs in `ai-services/`)
- Database schema definitions (belongs in `database/`)
- Business logic that should live in AI services

---

## database/

```
database/              ← Currently empty
```

**Purpose:** Database schemas, migration files, seed data, and database-level documentation.

**Planned contents (once implementation begins in M2):**
- Schema definition files
- Migration files (version-controlled database changes)
- Seed data for local development
- `README.md` explaining the database design

**Status:** Empty — schema design planned for Milestone 1; files created in Milestone 2.

**What belongs here:**
- SQL or ORM migration files
- Schema definition documents
- Seed / fixture data for development and testing
- Database-specific documentation

**What does not belong here:**
- Application code that reads/writes the database (belongs in `backend/`)
- Actual database data files or dumps (these are `.gitignore`d)

---

## docs/

```
docs/
├── Vision.md              # Project mission and goals
├── Architecture.md        # System design (under design)
├── TechStack.md           # Technology choices (under evaluation)
├── Roadmap.md             # Milestones and release plan
├── Features.md            # Planned feature specifications
├── GettingStarted.md      # Contributor onboarding
├── DeveloperGuide.md      # Development setup (coming in M2)
├── MaintainerGuide.md     # Admin workflows
├── FolderStructure.md     # This document
├── CodingStandards.md     # Code style and conventions
└── BranchingStrategy.md   # Git workflow
```

**Purpose:** All project documentation lives here. The README acts as the homepage; the `docs/` folder carries the content.

**What belongs here:**
- Project documentation aimed at contributors, maintainers, and users
- Design decisions and their rationale
- Guides and references

**What does not belong here:**
- Service-level README files (those live inside each service directory)
- Application code
- Configuration files

**Naming convention:** Use `PascalCase` for document names. `GettingStarted.md`, not `getting-started.md`. Each file should have one clear responsibility — don't create catch-all documents.

**Adding a new doc:** If you want to add a new document to `docs/`, open an issue first describing what the document covers and why it's needed. The maintainer will confirm it doesn't duplicate an existing document and add it to the Documentation Index in `README.md`.

---

## frontend/

```
frontend/              ← Currently empty
```

**Purpose:** The web application — the interface that researchers interact with.

**Planned contents (once implementation begins in M2):**
- Framework-specific project structure (TBD — depends on tech stack decision)
- UI components
- Pages / routes
- State management
- Tests
- `README.md` with setup and development instructions

**Status:** Empty — technology under evaluation (M1); implementation planned for Milestone 2.

**What belongs here:**
- All user-facing UI code
- Frontend-specific configuration
- Static assets served by the application (in a `public/` subdirectory)
- Frontend tests

**What does not belong here:**
- Backend logic
- Database code
- AI/ML code

---

## Folder Status

| Folder | Status | Active milestone |
|---|---|---|
| `.github/` | 🟡 In Progress | M0 |
| `ai-services/` | 🔴 Empty | M2 |
| `assets/` | 🔴 Empty | M0 (logo needed) |
| `backend/` | 🔴 Empty | M2 |
| `database/` | 🔴 Empty | M2 |
| `docs/` | 🟡 In Progress | M0 |
| `frontend/` | 🔴 Empty | M2 |

---

## Adding a New Top-Level Folder

Top-level folders define the high-level architecture of the project. Adding one is a significant decision.

**Process:**

1. Open a GitHub Issue describing the proposed folder, its purpose, and why it can't live inside an existing folder.
2. Tag it `discussion` and `enhancement`.
3. Allow the community and maintainer to discuss.
4. If approved, the maintainer will merge a PR that:
   - Creates the folder with a `README.md` explaining its purpose
   - Updates this document
   - Updates the README folder structure section

Do not create top-level folders in a PR without prior discussion.

---

*See also: [Architecture.md](Architecture.md) · [GettingStarted.md](GettingStarted.md) · [DeveloperGuide.md](DeveloperGuide.md)*
