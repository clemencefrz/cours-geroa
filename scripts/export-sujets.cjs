const { writeFileSync, mkdirSync } = require("node:fs");
const { dirname, resolve } = require("node:path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const examPapers = await prisma.exam_papers.findMany({
    include: {
      centers: true,
      exercises: {
        include: {
          exercise_chapter: {
            include: { chapters: true },
          },
        },
      },
    },
    orderBy: [{ year: "desc" }, { session: "desc" }],
  });

  const items = examPapers.map((p) => {
    const chapterNameSet = new Set();
    const exercises = [];
    for (const ex of p.exercises ?? []) {
      const exerciseChapterNames = [];
      for (const ec of ex.exercise_chapter ?? []) {
        if (ec.chapters?.name) {
          chapterNameSet.add(ec.chapters.name);
          exerciseChapterNames.push(ec.chapters.name);
        }
      }
      // unique per exercise, keep stable order
      const uniquePerExercise = Array.from(new Set(exerciseChapterNames));
      exercises.push({ index: exercises.length + 1, chapters: uniquePerExercise });
    }
    return {
      id: p.id,
      paper: p.paper,
      year: Number(p.year),
      session: p.session,
      level: p.level,
      centerName: p.centers?.name,
      correction: p.correction && p.correction.length > 0 ? p.correction : undefined,
      hasCorrection: Boolean(p.correction && p.correction.length > 0),
      chapters: Array.from(chapterNameSet),
      exercises,
    };
  });

  const outPath = resolve(process.cwd(), "public", "sujets-physique-chimie.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(items, null, 2), { encoding: "utf-8" });
  // eslint-disable-next-line no-console
  console.log(`Wrote ${items.length} sujets to ${outPath}`);

  // Also export chapters list (minimal fields)
  const chapters = await prisma.chapters.findMany({
    include: { thematics: { include: { subjects: true } } },
    orderBy: [{ name: "asc" }],
  });

  const chapterItems = chapters.map((c) => ({
    id: c.id,
    name: c.name,
    taughtInLevel: c.taught_in_level,
    thematic: c.thematics?.name,
    subject: c.thematics?.subjects?.name,
  }));

  const chaptersOut = resolve(process.cwd(), "public", "chapters.json");
  writeFileSync(chaptersOut, JSON.stringify(chapterItems, null, 2), {
    encoding: "utf-8",
  });
  // eslint-disable-next-line no-console
  console.log(`Wrote ${chapterItems.length} chapters to ${chaptersOut}`);
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


