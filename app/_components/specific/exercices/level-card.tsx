import { Level } from "@/src/entities/exercises";
import Link from "next/link";
import { Card, CardContent } from "../../design-system/card";

function slugify(text: string): string {
  return text
    .normalize("NFD") // Normaliser les accents
    .replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
    .toLowerCase() // Convertir en minuscules
    .trim() // Enlever les espaces en début/fin
    .replace(/\s+/g, "-") // Remplacer les espaces par des tirets
    .replace(/[^\w\-]+/g, ""); // Supprimer les caractères non-alphanumériques
}

type Props = {
  level: Pick<Level, "name">;
};

const LevelCard = ({ level }: Props) => {
  return (
    <Link href={`exercices/${slugify(level.name)}`}>
      <Card>
        <CardContent>
          <h3>{level.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LevelCard;
