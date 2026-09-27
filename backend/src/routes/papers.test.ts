import assert from "node:assert/strict";
import { once } from "node:events";
import { test } from "node:test";

import app from "../app";

test("GET /api/papers/arxiv/:id validates and rejects malformed IDs with 400", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("The test server did not expose a TCP address");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/api/papers/arxiv/malformed-id-!@#`);
    const body = (await response.json()) as { error: string; message: string };

    assert.equal(response.status, 400);
    assert.equal(body.error, "Bad Request");
    assert.ok(body.message.includes("Malformed arXiv ID format"));
  } finally {
    server.close();
    await once(server, "close");
  }
});
