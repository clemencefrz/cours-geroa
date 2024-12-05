import "katex/dist/katex.min.css";
import data from "@/data/exercises/exercises.json";
import { notFound } from "next/navigation";
import ExerciseAccordion from "@/app/_components/specific/exercices/exercice-accordion";

const TITLE_CHAPTER = "Manipulation des nombres négatifs";

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
      <div className="flex flex-col gap-4 w-full">
        {exercises.map((exercise, key) => (
          <ExerciseAccordion key={key} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
