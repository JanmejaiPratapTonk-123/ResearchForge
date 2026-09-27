export interface ArxivPaperMetadata {
  arxivId: string;
  title: string;
  abstract: string;
  authors: string[];
  publicationDate: string;
  doi?: string;
  journal?: string;
  primaryCategory?: string;
  pdfUrl?: string;
  url: string;
}

/**
 * Normalizes user-supplied arXiv input (URLs, prefixes, version suffixes) into a canonical arXiv ID.
 */
export function normalizeArxivId(rawInput: string): string {
  if (!rawInput || typeof rawInput !== "string") {
    throw new Error("Invalid arXiv ID: input must be a non-empty string");
  }

  let cleaned = rawInput.trim();

  // Match and strip URL patterns (e.g. https://arxiv.org/abs/1706.03762 or /pdf/1706.03762.pdf)
  const urlMatch = cleaned.match(/arxiv\.org\/(?:abs|pdf)\/([0-9]{4}\.[0-9]{4,5}(?:v[0-9]+)?|[a-zA-Z.-]+(?:\/[0-9]+)?)/i);
  if (urlMatch && urlMatch[1]) {
    cleaned = urlMatch[1];
  }

  // Strip leading "arxiv:" or "arXiv:"
  cleaned = cleaned.replace(/^arxiv:\s*/i, "");

  // Strip trailing ".pdf"
  cleaned = cleaned.replace(/\.pdf$/i, "");

  // Validate format (modern 4-digit.4-5 digit with optional version, or classic arch-ive/9999999)
  const idRegex = /^([0-9]{4}\.[0-9]{4,5}(?:v[0-9]+)?|[a-zA-Z.-]+(?:\/[0-9]+)?)$/;
  if (!idRegex.test(cleaned)) {
    throw new Error(`Malformed arXiv ID format: "${rawInput}"`);
  }

  return cleaned;
}

/**
 * Cleans multi-line XML text blocks by replacing newline wraps with standard single spaces.
 */
function cleanXmlText(text: string): string {
  return text
    .replace(/\r?\n|\r/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Parses an Atom 1.0 XML feed returned by the arXiv Export API without requiring heavy external parsers.
 */
export function parseArxivAtomFeed(xml: string, defaultId?: string): ArxivPaperMetadata | null {
  // Check if an <entry> exists
  const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/);
  if (!entryMatch) {
    return null;
  }
  const entry = entryMatch[1];

  // Extract ID
  const idMatch = entry.match(/<id>([^<]+)<\/id>/);
  let resolvedId = defaultId || "";
  if (idMatch && idMatch[1]) {
    const rawId = idMatch[1].trim();
    const idFromUri = rawId.match(/arxiv\.org\/abs\/([^\s<]+)/i);
    if (idFromUri && idFromUri[1]) {
      resolvedId = idFromUri[1];
    }
  }

  // Extract Title
  const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    return null;
  }
  const title = cleanXmlText(titleMatch[1]);

  // Extract Summary / Abstract
  const summaryMatch = entry.match(/<summary>([\s\S]*?)<\/summary>/);
  const abstract = summaryMatch ? cleanXmlText(summaryMatch[1]) : "";

  // Extract Authors
  const authors: string[] = [];
  const authorRegex = /<author>\s*<name>([^<]+)<\/name>\s*<\/author>/g;
  let match: RegExpExecArray | null;
  while ((match = authorRegex.exec(entry)) !== null) {
    if (match[1]) {
      authors.push(cleanXmlText(match[1]));
    }
  }

  // Extract Published Date
  const pubMatch = entry.match(/<published>([^<]+)<\/published>/);
  const publicationDate = pubMatch ? cleanXmlText(pubMatch[1]) : new Date().toISOString();

  // Extract DOI (optional)
  const doiMatch = entry.match(/<arxiv:doi[^>]*>([^<]+)<\/arxiv:doi>/);
  const doi = doiMatch ? cleanXmlText(doiMatch[1]) : undefined;

  // Extract Journal Ref (optional)
  const journalMatch = entry.match(/<arxiv:journal_ref[^>]*>([^<]+)<\/arxiv:journal_ref>/);
  const journal = journalMatch ? cleanXmlText(journalMatch[1]) : undefined;

  // Extract Primary Category (optional)
  const categoryMatch = entry.match(/<arxiv:primary_category[^>]*term="([^"]+)"/);
  const primaryCategory = categoryMatch ? cleanXmlText(categoryMatch[1]) : undefined;

  // Extract PDF Link (optional)
  const pdfMatch = entry.match(/<link[^>]*title="pdf"[^>]*href="([^"]+)"/);
  const pdfUrl = pdfMatch ? pdfMatch[1].trim() : `https://arxiv.org/pdf/${resolvedId}.pdf`;

  return {
    arxivId: resolvedId,
    title,
    abstract,
    authors: authors.length > 0 ? authors : ["Anonymous"],
    publicationDate,
    doi,
    journal,
    primaryCategory,
    pdfUrl,
    url: `https://arxiv.org/abs/${resolvedId}`,
  };
}

/**
 * Fetches paper metadata from the public arXiv API for a given arXiv ID.
 */
export async function fetchArxivPaper(rawInput: string): Promise<ArxivPaperMetadata> {
  const normalizedId = normalizeArxivId(rawInput);
  const apiUrl = `https://export.arxiv.org/api/query?id_list=${encodeURIComponent(normalizedId)}`;

  const response = await fetch(apiUrl, {
    headers: {
      "User-Agent": "ResearchForge/0.1.0 (https://github.com/JanmejaiPratapTonk-123/ResearchForge)",
    },
  });

  if (!response.ok) {
    throw new Error(`arXiv API responded with status ${response.status}: ${response.statusText}`);
  }

  const xml = await response.text();
  const parsed = parseArxivAtomFeed(xml, normalizedId);

  if (!parsed || parsed.title.toLowerCase().includes("error")) {
    throw new Error(`No paper found on arXiv with ID: "${normalizedId}"`);
  }

  return parsed;
}
