import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export function Hero() {
  const words = [
    "Apprends",
    "Progresse",
    "Révise",
    "Épanouis-toi",
    "Trouve ta voie",
  ];

  return (
    <div className="flex flex-col gap-9 items-center justify-center h-[468px]">
      <h1 className="text-4xl font-extrabold flex flex-col">
        <FlipWords words={words} className="text-primary text-5xl" />
        <p>avec les cours Geroa</p>
      </h1>

      <h2 className="text-base text-center max-w-[500px] font-medium">
        {`Cours de soutien scolaire en Mathématiques, physique-chimie et informatique pour lycéens et étudiants d'Anglet, Biarritz et Bayonne.`}
      </h2>

      <Button asChild>
        <Link href="/contact">Demander un rendez-vous dès maintenant</Link>
      </Button>
    </div>
  );
}
