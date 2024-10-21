import "katex/dist/katex.min.css";
import ExerciseAccordion from "../../_components/specific/exercice-accordion";
import data from "../../../data/exercises/exercises.json";
import { notFound } from "next/navigation";

const TITLE_CATEGORY = "Transformées de Laplace";

export default async function Page() {
  const laplaceCategory = data.categories.find(
    (category) => category.category === TITLE_CATEGORY
  );

  if (!laplaceCategory) {
    return notFound();
  }

  const exercises = laplaceCategory.exercises;

  return (
    <div className="flex flex-col items-center gap-8">
      <h1>{TITLE_CATEGORY}</h1>
      <h2>{"Calcul de Transformée de Laplace"}</h2>
      <div className="flex flex-col gap-4 w-full">
        {exercises.map((exercise, key) => (
          <ExerciseAccordion key={key} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
