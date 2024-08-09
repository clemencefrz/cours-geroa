import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { classNameSection } from ".";

export function HeaderHome() {
  const words = ["confiant", "performant", "meilleur", "épanoui"];

  return (
    <div className={classNameSection}>
      <div>
        <h1>
          Deviens
          <FlipWords words={words} /> <br />
          avec les cours Geroa
        </h1>

        <h2 className="text-2xl">
          {`Cours de soutien scolaire en Mathématiques, physique-chimie et
        informatique pour lycéens et étudiants d'Anglet, Biarritz et Bayonne.`}
        </h2>
      </div>
      <Button asChild>
        <Link href="/contact">Contactez-nous dès maintenant</Link>
      </Button>
    </div>
  );
}
