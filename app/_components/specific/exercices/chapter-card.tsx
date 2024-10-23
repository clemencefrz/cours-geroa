import { Chapter, Level } from "@/src/entities/exercises";
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
  chapter: Pick<Chapter, "title">;
};

const ChapterCard = ({ level, chapter }: Props) => {
  return (
    <Link href={`${slugify(level.name)}/${slugify(chapter.title)}`}>
      <Card>
        <CardContent>
          <h3>{chapter.title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChapterCard;
