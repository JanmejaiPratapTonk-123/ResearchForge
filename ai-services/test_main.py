import math
import sys
import unittest
from pathlib import Path

# Ensure ai-services root is in sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent))

from fastapi.testclient import TestClient
from main import (
    DEFAULT_MODEL,
    EMBEDDING_DIMENSION,
    app,
    generate_deterministic_embedding,
)


class TestAIMicroservice(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_health_endpoint(self):
        response = self.client.get("/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "ok")
        self.assertEqual(data["service"], "ai-service")
        self.assertEqual(data["dimension"], EMBEDDING_DIMENSION)
        self.assertIn("timestamp", data)

    def test_embed_single_text(self):
        payload = {"text": "Attention Is All You Need"}
        response = self.client.post("/embed", json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["model"], DEFAULT_MODEL)
        self.assertEqual(data["dimension"], 384)
        self.assertEqual(data["count"], 1)
        self.assertEqual(len(data["embeddings"]), 1)
        self.assertEqual(len(data["embeddings"][0]), 384)

        # Verify L2 normalization
        vec = data["embeddings"][0]
        norm = math.sqrt(sum(x * x for x in vec))
        self.assertAlmostEqual(norm, 1.0, places=3)

    def test_embed_batch_texts(self):
        payload = {
            "texts": [
                "Attention Is All You Need",
                "BERT: Pre-training of Deep Bidirectional Transformers",
                "Deep Residual Learning for Image Recognition",
            ]
        }
        response = self.client.post("/embed", json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["count"], 3)
        self.assertEqual(len(data["embeddings"]), 3)
        for vec in data["embeddings"]:
            self.assertEqual(len(vec), 384)

    def test_embed_validation_error_on_empty(self):
        response = self.client.post("/embed", json={})
        self.assertEqual(response.status_code, 422)

    def test_similarity_calculation(self):
        v1 = generate_deterministic_embedding("transformer architecture")
        v2 = generate_deterministic_embedding("transformer architecture")
        response = self.client.post(
            "/similarity", json={"vector_a": v1, "vector_b": v2}
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertAlmostEqual(data["cosine_similarity"], 1.0, places=4)

    def test_similarity_dimension_mismatch(self):
        response = self.client.post(
            "/similarity", json={"vector_a": [1.0] * 10, "vector_b": [1.0] * 10}
        )
        self.assertEqual(response.status_code, 400)


if __name__ == "__main__":
    unittest.main()
