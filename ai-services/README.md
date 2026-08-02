# AI Microservice (`ai-services/`)

> **Role:** Python AI microservice for text embeddings, paper summarization, and NLP pipelines.  
> **Status:** Scaffolding complete — FastAPI server running on port `8000`.

---

## Purpose

The `ai-services/` microservice runs Python-based Machine Learning pipelines for ResearchForge. It operates statelessly — accepting text from `backend/` and returning vector embeddings or model outputs.

---

## Tech Stack

- **Framework:** FastAPI
- **Language:** Python 3.12+
- **Package Manager:** `uv` (or `pip`)
- **Port:** `8000` (default)

---

## How to Run Locally

```bash
# Using uv (recommended)
uv sync
uv run uvicorn main:app --reload

# Or using standard venv + pip
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Check health endpoint
curl http://localhost:8000/health
```

---

## Planned Contributor Infrastructure Issues

Contributors can take on AI service infrastructure tasks:
- Integrate `sentence-transformers` library and `all-MiniLM-L6-v2` embedding model
- Implement `POST /embed` vector generation endpoint
- Set up Pytest test suite for embedding endpoints
- Configure Ruff linter and code formatter
