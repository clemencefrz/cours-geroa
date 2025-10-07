import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/design-system/card";
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
  chapters?: string[];
  exercises?: { index: number; chapters: string[] }[];
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
      <CardContent className="space-y-3">
        {Array.isArray(sujet?.exercises) && sujet.exercises.length > 0 ? (
          <div className="space-y-2">
            {sujet.exercises.map((ex) => (
              <div key={ex.index}>
                <div className="text-sm font-medium">Exercice {ex.index} :</div>
                {ex.chapters.length > 0 ? (
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {ex.chapters.map((ch) => (
                      <li key={ch}>{ch}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-muted-foreground">Aucun chapitre associé</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {(sujet.chapters ?? []).map((ch) => (
              <li key={ch}>{ch}</li>
            ))}
          </ul>
        )}
      </CardContent>
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


