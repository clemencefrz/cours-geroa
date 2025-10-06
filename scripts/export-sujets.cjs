const { writeFileSync, mkdirSync } = require("node:fs");
const { dirname, resolve } = require("node:path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const examPapers = await prisma.exam_papers.findMany({
    include: { centers: true },
    orderBy: [{ year: "desc" }, { session: "desc" }],
  });

  const items = examPapers.map((p) => ({
    id: p.id,
    paper: p.paper,
    year: Number(p.year),
    session: p.session,
    level: p.level,
    centerName: p.centers?.name,
    correction: p.correction && p.correction.length > 0 ? p.correction : undefined,
    hasCorrection: Boolean(p.correction && p.correction.length > 0),
  }));

  const outPath = resolve(process.cwd(), "public", "sujets.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(items, null, 2), { encoding: "utf-8" });
  // eslint-disable-next-line no-console
  console.log(`Wrote ${items.length} sujets to ${outPath}`);
}

main()
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


