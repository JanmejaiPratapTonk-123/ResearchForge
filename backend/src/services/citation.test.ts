import assert from "node:assert/strict";
import { test } from "node:test";
import {
  generateBibTeX,
  generateAPA,
  generateMLA,
  formatCitation,
  PaperCitationData,
} from "./citation";

const samplePaper: PaperCitationData = {
  title: "Attention Is All You Need",
  authors: [
    "Ashish Vaswani",
    "Noam Shazeer",
    "Niki Parmar",
    "Jakob Uszkoreit",
    "Llion Jones",
    "Aidan N. Gomez",
    "Lukasz Kaiser",
    "Illia Polosukhin",
  ],
  publicationDate: "2017-06-12T00:00:00.000Z",
  journal: "Advances in Neural Information Processing Systems",
  doi: "10.5555/3295222.3295349",
  arxivId: "1706.03762",
  url: "https://arxiv.org/abs/1706.03762",
};

test("generateBibTeX creates standard, valid BibTeX syntax", () => {
  const bibtex = generateBibTeX(samplePaper);
  assert.ok(bibtex.startsWith("@article{Vaswani2017Attention,"));
  assert.ok(bibtex.includes("title = {Attention Is All You Need},"));
  assert.ok(bibtex.includes("author = {Ashish Vaswani and Noam Shazeer and Niki Parmar and Jakob Uszkoreit and Llion Jones and Aidan N. Gomez and Lukasz Kaiser and Illia Polosukhin},"));
  assert.ok(bibtex.includes("journal = {Advances in Neural Information Processing Systems},"));
  assert.ok(bibtex.includes("year = {2017},"));
  assert.ok(bibtex.includes("doi = {10.5555/3295222.3295349},"));
  assert.ok(bibtex.includes("eprint = {1706.03762},"));
  assert.ok(bibtex.endsWith("}"));
});

test("generateBibTeX handles single author and missing dates safely", () => {
  const minimalPaper: PaperCitationData = {
    title: "A Simple Paper",
    authors: ["John Doe"],
  };
  const bibtex = generateBibTeX(minimalPaper);
  assert.ok(bibtex.startsWith("@article{DoeA,"));
  assert.ok(bibtex.includes("title = {A Simple Paper}"));
  assert.ok(bibtex.includes("author = {John Doe}"));
});

test("generateAPA formats multi-author references correctly", () => {
  const apa = generateAPA(samplePaper);
  assert.ok(apa.includes("Vaswani, A."));
  assert.ok(apa.includes("(2017)."));
  assert.ok(apa.includes("Attention Is All You Need."));
  assert.ok(apa.includes("https://doi.org/10.5555/3295222.3295349"));
});

test("generateAPA handles 2 authors with ampersand", () => {
  const twoAuthorPaper: PaperCitationData = {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: ["Jacob Devlin", "Ming-Wei Chang"],
    publicationDate: "2018-10-11",
  };
  const apa = generateAPA(twoAuthorPaper);
  assert.equal(apa, "Devlin, J., & Chang, M. (2018). BERT: Pre-training of Deep Bidirectional Transformers.");
});

test("generateMLA formats authors and titles correctly", () => {
  const mla = generateMLA(samplePaper);
  assert.ok(mla.includes("Vaswani, Ashish, et al."));
  assert.ok(mla.includes('"Attention Is All You Need."'));
  assert.ok(mla.includes("Advances in Neural Information Processing Systems,"));
  assert.ok(mla.includes("2017."));
});

test("formatCitation dispatches to requested style", () => {
  const bib = formatCitation(samplePaper, "bibtex");
  const apa = formatCitation(samplePaper, "apa");
  const mla = formatCitation(samplePaper, "mla");

  assert.ok(bib.startsWith("@article{"));
  assert.ok(apa.includes("(2017)."));
  assert.ok(mla.includes('"Attention Is All You Need."'));
});

