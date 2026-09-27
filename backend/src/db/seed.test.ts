import assert from "node:assert/strict";
import { test } from "node:test";
import { loadSeedPapers } from "./seed";

test("loadSeedPapers successfully loads and parses seed-data.json", () => {
  const papers = loadSeedPapers();
  assert.ok(Array.isArray(papers));
  assert.ok(papers.length >= 5, "Expected at least 5 benchmark research papers");
});

test("seed papers conform to database schema requirements", () => {
  const papers = loadSeedPapers();
  const arxivIds = new Set<string>();
  const dois = new Set<string>();

  for (const paper of papers) {
    // Title & abstract
    assert.ok(paper.title && paper.title.length > 5, "Paper must have a valid title");
    assert.ok(paper.abstract && paper.abstract.length > 20, "Paper must have an informative abstract");

    // Authors array
    assert.ok(Array.isArray(paper.authors) && paper.authors.length > 0, "Authors must be a non-empty array");

    // Publication date
    if (paper.publicationDate) {
      const parsedDate = new Date(paper.publicationDate);
      assert.ok(!isNaN(parsedDate.getTime()), "Publication date must be a valid ISO timestamp");
    }

    // Uniqueness
    if (paper.arxivId) {
      assert.ok(!arxivIds.has(paper.arxivId), `Duplicate arXiv ID found in seed data: ${paper.arxivId}`);
      arxivIds.add(paper.arxivId);
    }
    if (paper.doi) {
      assert.ok(!dois.has(paper.doi), `Duplicate DOI found in seed data: ${paper.doi}`);
      dois.add(paper.doi);
    }
  }
});
