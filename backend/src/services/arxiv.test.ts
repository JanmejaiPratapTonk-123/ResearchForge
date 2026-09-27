import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeArxivId, parseArxivAtomFeed } from "./arxiv";

const sampleAtomXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:arxiv="http://arxiv.org/schemas/atom">
  <title>arXiv Query</title>
  <entry>
    <id>http://arxiv.org/abs/1706.03762v7</id>
    <published>2017-06-12T17:58:39Z</published>
    <updated>2023-08-02T01:54:47Z</updated>
    <title>Attention Is All You Need</title>
    <summary>
      The dominant sequence transduction models are based on complex recurrent or
      convolutional neural networks in an encoder-decoder configuration. We propose
      the Transformer, a model architecture eschewing recurrence.
    </summary>
    <author>
      <name>Ashish Vaswani</name>
    </author>
    <author>
      <name>Noam Shazeer</name>
    </author>
    <arxiv:doi>10.5555/3295222.3295349</arxiv:doi>
    <arxiv:primary_category term="cs.CL" />
    <link title="pdf" href="http://arxiv.org/pdf/1706.03762v7" rel="related" type="application/pdf"/>
  </entry>
</feed>`;

test("normalizeArxivId standardizes various arXiv ID and URL formats", () => {
  assert.equal(normalizeArxivId("1706.03762"), "1706.03762");
  assert.equal(normalizeArxivId("arXiv:1706.03762"), "1706.03762");
  assert.equal(normalizeArxivId("arxiv: 1706.03762v5"), "1706.03762v5");
  assert.equal(normalizeArxivId("https://arxiv.org/abs/1706.03762"), "1706.03762");
  assert.equal(normalizeArxivId("https://arxiv.org/pdf/1706.03762.pdf"), "1706.03762");
});

test("normalizeArxivId rejects malformed and empty identifiers", () => {
  assert.throws(() => normalizeArxivId(""), /Invalid arXiv ID/);
  assert.throws(() => normalizeArxivId("not_an_arxiv_id!@#"), /Malformed arXiv ID format/);
});

test("parseArxivAtomFeed correctly extracts structured paper metadata", () => {
  const result = parseArxivAtomFeed(sampleAtomXml, "1706.03762");
  assert.ok(result !== null);
  assert.equal(result.title, "Attention Is All You Need");
  assert.ok(result.abstract.startsWith("The dominant sequence transduction models"));
  assert.deepEqual(result.authors, ["Ashish Vaswani", "Noam Shazeer"]);
  assert.equal(result.publicationDate, "2017-06-12T17:58:39Z");
  assert.equal(result.doi, "10.5555/3295222.3295349");
  assert.equal(result.primaryCategory, "cs.CL");
  assert.equal(result.pdfUrl, "http://arxiv.org/pdf/1706.03762v7");
  assert.equal(result.url, "https://arxiv.org/abs/1706.03762v7");
});

test("parseArxivAtomFeed returns null when no entry is present", () => {
  const emptyFeed = `<feed xmlns="http://www.w3.org/2005/Atom"><title>Empty</title></feed>`;
  const result = parseArxivAtomFeed(emptyFeed);
  assert.equal(result, null);
});
