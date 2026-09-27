import assert from "node:assert/strict";
import { once } from "node:events";
import { test } from "node:test";

import app from "../app";

test("POST /api/citations/format returns formatted citation", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("The test server did not expose a TCP address");
    }

    const payload = {
      format: "bibtex",
      paper: {
        title: "Deep Residual Learning for Image Recognition",
        authors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
        publicationDate: "2015-12-10",
        doi: "10.1109/CVPR.2016.90",
      },
    };

    const response = await fetch(`http://127.0.0.1:${address.port}/api/citations/format`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const body = (await response.json()) as { format: string; citation: string };

    assert.equal(response.status, 200);
    assert.equal(body.format, "bibtex");
    assert.ok(body.citation.includes("@article{He2015Deep"));
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("POST /api/citations/format rejects invalid request without paper object", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("The test server did not expose a TCP address");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/api/citations/format`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ format: "bibtex" }),
    });

    assert.equal(response.status, 400);
  } finally {
    server.close();
    await once(server, "close");
  }
});
