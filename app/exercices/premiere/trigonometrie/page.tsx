import "katex/dist/katex.min.css";
import data from "@/data/exercises/exercises.json";
import { notFound } from "next/navigation";
import ExerciseAccordion from "@/app/_components/specific/exercices/exercice-accordion";

const TITLE_CHAPTER = "Trigonométrie";

const revisionSheet = `
<h3>Fiche de révision</h3>
<ul>
  <li><strong>Relation fondamentale</strong> : 
    \\[ \\sin^2(x) + \\cos^2(x) = 1 \\]
  </li>
  <li><strong>Formules d'addition</strong> :
    \\[ \\sin(a + b) = \\sin(a)\\cos(b) + \\cos(a)\\sin(b) \\]
    \\[ \\cos(a + b) = \\cos(a)\\cos(b) - \\sin(a)\\sin(b) \\]
  </li>
  <li><strong>Tangente</strong> :
    \\[ \\tan(x) = \\frac{\\sin(x)}{\\cos(x)} \\text{ si } \\cos(x) \\neq 0 \\]
  </li>
</ul>
`;

export default async function Page() {
  const chapter = data.chapters.find(
    (chapter) => chapter.title === TITLE_CHAPTER
  );

  if (!chapter) {
    return notFound();
  }

  const exercises = chapter.exercises;

  return (
    <div className="flex flex-col items-center gap-8">
      <h1>{chapter.title}</h1>
      <h2>{chapter.title}</h2>
      <div
        className="bg-gray-100 p-4 rounded shadow w-full"
        dangerouslySetInnerHTML={{ __html: revisionSheet }}
      ></div>
      <div className="flex flex-col gap-4 w-full">
        {exercises.map((exercise, key) => (
          <ExerciseAccordion key={key} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
