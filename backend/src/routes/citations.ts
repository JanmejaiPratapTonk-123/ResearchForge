import { Router, Request, Response } from "express";
import { formatCitation, CitationFormat, PaperCitationData } from "../services/citation";

const router = Router();

router.post("/api/citations/format", (req: Request, res: Response): void => {
  const { paper, format = "bibtex" } = req.body as {
    paper?: PaperCitationData;
    format?: CitationFormat;
  };

  if (!paper || !paper.title || !Array.isArray(paper.authors)) {
    res.status(400).json({
      error: "Bad Request",
      message: "A valid paper object with title and authors array is required.",
    });
    return;
  }

  const validFormats: CitationFormat[] = ["bibtex", "apa", "mla"];
  const targetFormat = validFormats.includes(format?.toLowerCase() as CitationFormat)
    ? (format.toLowerCase() as CitationFormat)
    : "bibtex";

  const citation = formatCitation(paper, targetFormat);

  res.status(200).json({
    format: targetFormat,
    citation,
  });
});

export default router;
