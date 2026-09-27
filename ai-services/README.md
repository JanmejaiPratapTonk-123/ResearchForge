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

# Generate 384-dimensional vector embedding
curl -X POST http://localhost:8000/embed \
  -H "Content-Type: application/json" \
  -d '{"text": "Attention Is All You Need"}'

# Calculate cosine similarity between two vectors
curl -X POST http://localhost:8000/similarity \
  -H "Content-Type: application/json" \
  -d '{"vector_a": [...], "vector_b": [...]}'
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Service health, model info, and dimension metadata |
| `POST` | `/embed` | Generates 384-dimensional L2-normalized dense embeddings for `text` or `texts` |
| `POST` | `/similarity` | Computes cosine similarity score between two 384-dimensional vectors |

---

## Running Tests & Linting

```bash
# Run unit test suite
python -m unittest test_main.py

# Run Ruff lint checks
ruff check .
```

---

## Planned Contributor Infrastructure Issues

Contributors can take on AI service infrastructure tasks:
- Integrate `sentence-transformers` library and `all-MiniLM-L6-v2` embedding model
- Implement paper summarization endpoints
- Add caching for computed embeddings
