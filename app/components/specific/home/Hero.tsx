import { Link } from "lucide-react";

import { FlipWords } from "../../design-system/flip-words";
import { Button } from "../../design-system/button";

export function Hero() {
  const words = [
    "Apprends",
    "Progresse",
    "Révise",
    "Épanouis-toi",
    "Trouve ta voie",
  ];

  return (
    <div className="ContainerHeaderPage">
      <h1 className="flex flex-col">
        <FlipWords
          words={words}
          className="text-primary text-4xl md:text-5xl"
        />
        avec le soutien scolaire Geroa
      </h1>

      <h2 className="H2SubtitlePage">
        {`Cours de soutien scolaire en Mathématiques, physique-chimie et informatique pour lycéens et étudiants d'Anglet, Biarritz et Bayonne.`}
      </h2>

      <Button asChild>
        <Link href="/contact">Demander un rendez-vous dès maintenant</Link>
      </Button>
    </div>
  );
}
