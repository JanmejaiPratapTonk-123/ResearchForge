import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient } from "@prisma/client";

export interface SeedPaper {
  title: string;
  abstract: string;
  authors: string[];
  doi?: string;
  arxivId?: string;
  url?: string;
  publicationDate?: string;
  journal?: string;
  citationCount?: number;
}

export function loadSeedPapers(): SeedPaper[] {
  const possiblePaths = [
    resolve(__dirname, "../../../database/seed-data.json"),
    resolve(process.cwd(), "database/seed-data.json"),
    resolve(process.cwd(), "../database/seed-data.json"),
  ];

  for (const p of possiblePaths) {
    try {
      const content = readFileSync(p, "utf-8");
      return JSON.parse(content) as SeedPaper[];
    } catch {
      continue;
    }
  }

  throw new Error("Unable to locate database/seed-data.json");
}

export async function seedDatabase(client?: PrismaClient): Promise<{
  userId: string;
  workspaceId: string;
  papersCount: number;
}> {
  const prisma = client || new PrismaClient();

  try {
    // 1. Upsert demo user
    const user = await prisma.user.upsert({
      where: { email: "demo@researchforge.org" },
      update: {},
      create: {
        email: "demo@researchforge.org",
        name: "Demo Researcher",
        password: "hashed_demo_password",
      },
    });

    // 2. Upsert demo workspace
    const workspace = await prisma.workspace.upsert({
      where: { id: "demo-workspace-001" },
      update: {},
      create: {
        id: "demo-workspace-001",
        name: "Foundational AI Papers",
        description: "Benchmark papers on transformers, representation learning, and vision.",
        userId: user.id,
      },
    });

    // 3. Upsert seminal papers
    const papers = loadSeedPapers();
    for (const p of papers) {
      if (!p.arxivId) continue;
      await prisma.paper.upsert({
        where: { arxivId: p.arxivId },
        update: {
          title: p.title,
          abstract: p.abstract,
          citationCount: p.citationCount,
        },
        create: {
          title: p.title,
          abstract: p.abstract,
          authors: p.authors,
          doi: p.doi,
          arxivId: p.arxivId,
          url: p.url,
          publicationDate: p.publicationDate ? new Date(p.publicationDate) : undefined,
          journal: p.journal,
          citationCount: p.citationCount,
          workspaces: {
            connect: { id: workspace.id },
          },
        },
      });
    }

    return { userId: user.id, workspaceId: workspace.id, papersCount: papers.length };
  } finally {
    if (!client) {
      await prisma.$disconnect();
    }
  }
}

// Standalone CLI execution
if (process.argv[1]?.replace(/\\/g, "/").endsWith("seed.ts")) {
  seedDatabase()
    .then((res) => {
      console.log(`Successfully seeded database with ${res.papersCount} papers.`);
      process.exit(0);
    })
    .catch((err) => {
      console.error("Seeding failed:", err);
      process.exit(1);
    });
}
