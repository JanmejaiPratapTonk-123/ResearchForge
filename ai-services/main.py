import hashlib
import math
import os
from datetime import datetime, timezone
from typing import Annotated

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

EMBEDDING_DIMENSION = 384
DEFAULT_MODEL = "all-MiniLM-L6-v2"

# Attempt sentence_transformers import if available
try:
    from sentence_transformers import SentenceTransformer

    _st_model = SentenceTransformer(DEFAULT_MODEL)
except (ImportError, RuntimeError, OSError):
    _st_model = None


def generate_deterministic_embedding(
    text: str, dimension: int = EMBEDDING_DIMENSION
) -> list[float]:
    """Generates a deterministic, L2-normalized dense embedding vector for the given text.

    Uses sha256 rolling feature hashing to produce high-entropy 384-dimensional vectors
    when heavy PyTorch/sentence-transformers dependencies are not loaded.
    """
    raw_vector = []
    text_bytes = text.strip().encode("utf-8")
    for i in range(dimension):
        h = hashlib.sha256(text_bytes + i.to_bytes(4, "big")).digest()
        val = int.from_bytes(h[:4], "big", signed=True) / (2**31)
        raw_vector.append(val)

    norm = math.sqrt(sum(x * x for x in raw_vector))
    if norm == 0:
        return [0.0] * dimension
    return [round(x / norm, 6) for x in raw_vector]


def compute_embedding(text: str) -> list[float]:
    if _st_model is not None:
        vector = _st_model.encode(text, normalize_embeddings=True)
        return [float(x) for x in vector]
    return generate_deterministic_embedding(text)


class EmbedRequest(BaseModel):
    text: Annotated[str | None, Field(default=None, description="Single text to embed")] = None
    texts: Annotated[
        list[str] | None, Field(default=None, description="List of texts to embed in batch")
    ] = None
    model: Annotated[
        str, Field(default=DEFAULT_MODEL, description="Embedding model identifier")
    ] = DEFAULT_MODEL


class EmbedResponse(BaseModel):
    model: str
    dimension: int
    count: int
    embeddings: list[list[float]]


class SimilarityRequest(BaseModel):
    vector_a: Annotated[list[float], Field(description="First 384-dimensional vector")]
    vector_b: Annotated[list[float], Field(description="Second 384-dimensional vector")]


class SimilarityResponse(BaseModel):
    cosine_similarity: float


app = FastAPI(
    title="ResearchForge AI Microservice",
    description="FastAPI service for paper embedding, semantic search, and NLP pipelines",
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "ai-service",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "model": DEFAULT_MODEL,
        "dimension": EMBEDDING_DIMENSION,
    }


@app.post("/embed", response_model=EmbedResponse)
def create_embeddings(request: EmbedRequest):
    input_texts: list[str] = []
    if request.text is not None and request.text.strip():
        input_texts.append(request.text.strip())
    elif request.texts is not None:
        input_texts.extend([t.strip() for t in request.texts if t.strip()])

    if not input_texts:
        raise HTTPException(
            status_code=422,
            detail="Request must contain non-empty 'text' or 'texts' field.",
        )

    embeddings = [compute_embedding(t) for t in input_texts]

    return EmbedResponse(
        model=request.model or DEFAULT_MODEL,
        dimension=EMBEDDING_DIMENSION,
        count=len(embeddings),
        embeddings=embeddings,
    )


@app.post("/similarity", response_model=SimilarityResponse)
def calculate_similarity(request: SimilarityRequest):
    if len(request.vector_a) != EMBEDDING_DIMENSION or len(request.vector_b) != EMBEDDING_DIMENSION:
        raise HTTPException(
            status_code=400,
            detail=f"Both vectors must have exactly {EMBEDDING_DIMENSION} dimensions.",
        )

    dot_product = sum(a * b for a, b in zip(request.vector_a, request.vector_b, strict=False))
    norm_a = math.sqrt(sum(a * a for a in request.vector_a))
    norm_b = math.sqrt(sum(b * b for b in request.vector_b))

    if norm_a == 0 or norm_b == 0:
        return SimilarityResponse(cosine_similarity=0.0)

    similarity = dot_product / (norm_a * norm_b)
    return SimilarityResponse(cosine_similarity=round(similarity, 6))


if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
