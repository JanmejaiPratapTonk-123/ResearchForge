export interface PaperCitationData {
  id?: string;
  title: string;
  authors: string[];
  publicationDate?: Date | string | null;
  journal?: string | null;
  doi?: string | null;
  arxivId?: string | null;
  url?: string | null;
}

export type CitationFormat = "bibtex" | "apa" | "mla";

function extractYear(date?: Date | string | null): string {
  if (!date) return "n.d.";
  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getUTCFullYear();
  return isNaN(year) ? "n.d." : year.toString();
}

function parseAuthorName(rawName: string): { firstName: string; lastName: string; initials: string } {
  const trimmed = rawName.trim();
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: parts[0], initials: parts[0].charAt(0).toUpperCase() + "." };
  }
  const lastName = parts[parts.length - 1];
  const firstParts = parts.slice(0, parts.length - 1);
  const firstName = firstParts.join(" ");
  const initials = firstParts.map((p) => p.charAt(0).toUpperCase() + ".").join(" ");
  return { firstName, lastName, initials };
}

function sanitizeBibTeXKey(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * Generates a standard BibTeX entry for a research paper.
 */
export function generateBibTeX(paper: PaperCitationData): string {
  const primaryAuthor = paper.authors.length > 0 ? parseAuthorName(paper.authors[0]).lastName : "Anonymous";
  const year = extractYear(paper.publicationDate);
  const firstTitleWord = (paper.title.split(/\s+/)[0] || "Paper").replace(/[^a-zA-Z0-9]/g, "");
  const citeKey = `${sanitizeBibTeXKey(primaryAuthor)}${year !== "n.d." ? year : ""}${sanitizeBibTeXKey(firstTitleWord)}`;

  const authorField = paper.authors.length > 0 ? paper.authors.join(" and ") : "Anonymous";
  const lines: string[] = [
    `@article{${citeKey},`,
    `  title = {${paper.title}},`,
    `  author = {${authorField}},`,
  ];

  if (paper.journal) {
    lines.push(`  journal = {${paper.journal}},`);
  }
  if (year !== "n.d.") {
    lines.push(`  year = {${year}},`);
  }
  if (paper.doi) {
    lines.push(`  doi = {${paper.doi}},`);
  }
  if (paper.arxivId) {
    lines.push(`  eprint = {${paper.arxivId}},`, `  archivePrefix = {arXiv},`);
  }
  if (paper.url) {
    lines.push(`  url = {${paper.url}},`);
  }

  // Close the last field properly without a trailing comma on the closing brace
  const lastIdx = lines.length - 1;
  lines[lastIdx] = lines[lastIdx].replace(/,$/, "");
  lines.push("}");

  return lines.join("\n");
}

/**
 * Formats paper reference according to APA 7th Edition style.
 */
export function generateAPA(paper: PaperCitationData): string {
  const parsedAuthors = paper.authors.map(parseAuthorName);
  let authorStr = "Anonymous";

  if (parsedAuthors.length === 1) {
    authorStr = `${parsedAuthors[0].lastName}, ${parsedAuthors[0].initials}`;
  } else if (parsedAuthors.length === 2) {
    authorStr = `${parsedAuthors[0].lastName}, ${parsedAuthors[0].initials}, & ${parsedAuthors[1].lastName}, ${parsedAuthors[1].initials}`;
  } else if (parsedAuthors.length > 2) {
    const allExceptLast = parsedAuthors.slice(0, -1).map((a) => `${a.lastName}, ${a.initials}`).join(", ");
    const last = parsedAuthors[parsedAuthors.length - 1];
    authorStr = `${allExceptLast}, & ${last.lastName}, ${last.initials}`;
  }

  const year = extractYear(paper.publicationDate);
  const title = paper.title.endsWith(".") ? paper.title : `${paper.title}.`;
  let result = `${authorStr} (${year}). ${title}`;

  if (paper.journal) {
    result += ` ${paper.journal}.`;
  }
  if (paper.doi) {
    const doiUrl = paper.doi.startsWith("http") ? paper.doi : `https://doi.org/${paper.doi}`;
    result += ` ${doiUrl}`;
  } else if (paper.url) {
    result += ` ${paper.url}`;
  }

  return result.trim();
}

/**
 * Formats paper reference according to MLA 9th Edition style.
 */
export function generateMLA(paper: PaperCitationData): string {
  const parsedAuthors = paper.authors.map(parseAuthorName);
  let authorStr = "Anonymous";

  if (parsedAuthors.length === 1) {
    authorStr = `${parsedAuthors[0].lastName}, ${parsedAuthors[0].firstName}`;
  } else if (parsedAuthors.length === 2) {
    authorStr = `${parsedAuthors[0].lastName}, ${parsedAuthors[0].firstName}, and ${parsedAuthors[1].firstName} ${parsedAuthors[1].lastName}`;
  } else if (parsedAuthors.length > 2) {
    authorStr = `${parsedAuthors[0].lastName}, ${parsedAuthors[0].firstName}, et al`;
  }

  const titleInQuotes = `"${paper.title.replace(/\.$/, "")}."`;
  let result = `${authorStr}. ${titleInQuotes}`;

  if (paper.journal) {
    result += ` ${paper.journal},`;
  }

  const year = extractYear(paper.publicationDate);
  if (year !== "n.d.") {
    result += ` ${year}.`;
  }

  if (paper.doi) {
    const doiUrl = paper.doi.startsWith("http") ? paper.doi : `https://doi.org/${paper.doi}`;
    result += ` ${doiUrl}`;
  } else if (paper.url) {
    result += ` ${paper.url}`;
  }

  return result.trim();
}

/**
 * Main export function supporting multiple citation formats.
 */
export function formatCitation(paper: PaperCitationData, format: CitationFormat = "bibtex"): string {
  switch (format.toLowerCase()) {
    case "apa":
      return generateAPA(paper);
    case "mla":
      return generateMLA(paper);
    case "bibtex":
    default:
      return generateBibTeX(paper);
  }
}
