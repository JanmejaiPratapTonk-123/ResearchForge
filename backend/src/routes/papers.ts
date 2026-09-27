import { Router, Request, Response } from "express";
import { fetchArxivPaper } from "../services/arxiv";

const router = Router();

router.get("/api/papers/arxiv/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const paper = await fetchArxivPaper(id);
    res.status(200).json(paper);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch paper metadata";
    const statusCode =
      message.includes("Invalid arXiv ID") || message.includes("Malformed") ? 400 : 404;

    res.status(statusCode).json({
      error: statusCode === 400 ? "Bad Request" : "Not Found",
      message,
    });
  }
});

export default router;
