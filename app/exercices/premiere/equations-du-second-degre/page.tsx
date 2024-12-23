import "katex/dist/katex.min.css";
import data from "@/data/exercises/exercises.json";
import { notFound } from "next/navigation";
import ExerciseAccordion from "@/app/_components/specific/exercices/exercice-accordion";
import Latex from "react-latex-next";

const TITLE_CHAPTER = "Équations du second degré";

const revisionSheet = `
<h3>Fiche de révision</h3>
<ul>
  <li><strong>Calcul de Δ (le discriminant)</strong> : Pour une équation \\( ax^2 + bx + c = 0 \\), le discriminant est \\( \\Delta = b^2 - 4ac \\).</li>
  <li><strong>Interprétation graphique</strong> :
    <ul>
      <li>\\( \\Delta > 0 \\) : Deux solutions réelles distinctes. La parabole coupe l'axe des abscisses en deux points.</li>
      <li>\\( \\Delta = 0 \\) : Une solution double. La parabole est tangente à l'axe des abscisses.</li>
      <li>\\( \\Delta < 0 \\) : Pas de solution réelle. La parabole ne coupe pas l'axe des abscisses.</li>
    </ul>
  </li>
  <li><strong>Factorisation</strong> :
    <ul>
      <li>\\( \\Delta > 0 \\) : \\( ax^2 + bx + c = a(x - x_1)(x - x_2) \\).</li>
      <li>\\( \\Delta = 0 \\) : \\( ax^2 + bx + c = a(x - x_0)^2 \\).</li>
      <li>\\( \\Delta < 0 \\) : Pas de factorisation réelle.</li>
    </ul>
  </li>
  <li><strong>Signe du trinôme</strong> :
    <ul>
      <li>\\( \\Delta > 0 \\) : Signe de \\( a \\) à l'extérieur des racines, opposé entre les racines.</li>
      <li>\\( \\Delta = 0 \\) : Signe de \\( a \\) sauf à la racine double.</li>
      <li>\\( \\Delta < 0 \\) : Signe de \\( a \\) partout.</li>
    </ul>
  </li>
  <li><strong>Tableau de variations</strong> :
    <ul>
      <li>Coordonnées du sommet : \\( x_s = -\\frac{b}{2a}, y_s = f(x_s) \\).</li>
      <li>\\( a > 0 \\) : décroissante jusqu’au sommet, croissante ensuite.</li>
      <li>\\( a < 0 \\) : croissante jusqu’au sommet, décroissante ensuite.</li>
    </ul>
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
      <div className="bg-gray-100 p-8 rounded shadow">
        <Latex>{revisionSheet}</Latex>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {exercises.map((exercise, key) => (
          <ExerciseAccordion key={key} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
