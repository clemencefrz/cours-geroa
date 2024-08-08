import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export function HeaderHome() {
  const words = ["confiant", "performant", "meilleur", "épanoui"];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="">
        Deviens
        <FlipWords words={words} /> <br />
        avec les cours Geroa
      </h1>
      <h2>
        Cours collectifs, particuliers et stages intensifs pour lycéens et
        étudiants à Anglet : Améliorez vos notes, gagnez en confiance, et
        préparez votre avenir.
      </h2>
      <Button asChild>
        <Link href="/contact">Contactez-nous dès maintenant</Link>
      </Button>
    </div>
  );
}
