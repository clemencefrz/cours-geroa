import { Card, CardHeader, CardTitle, CardFooter } from "@/components/design-system/card";
import { Button } from "@/components/design-system/button";

type SujetItem = {
  id: number;
  paper: string; // URL du sujet
  year: number;
  session: number;
  level: string;
  centerName?: string;
  correction?: string; // URL de la correction
  hasCorrection: boolean;
};

type CardSujetDeBacProps = {
  sujet: SujetItem;
};

export default function CardSujetDeBac({ sujet }: CardSujetDeBacProps) {
  const title = `${sujet.centerName ?? "Centre inconnu"} / ${sujet.year}`;
  const correctionHref = sujet.hasCorrection ? sujet.correction : undefined;

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="gap-2 p-4 pt-0">
        <Button asChild>
          <a href={sujet.paper} target="_blank" rel="noopener noreferrer">
            Voir le sujet
          </a>
        </Button>
        {sujet.hasCorrection && correctionHref ? (
          <Button asChild>
            <a href={correctionHref} target="_blank" rel="noopener noreferrer">
              Voir la correction
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}


