import React, { useCallback } from "react";

import { ExternalLink } from "lucide-react";
import { Prisma } from "@prisma/client";
import { Button } from "@/components/design-system/button";
import { CardHeader, CardContent,Card,CardTitle } from "@/components/design-system/card";


type ExamWithDetails = Prisma.exam_papersGetPayload<{
  include: {
    centers: true;
    exercises: {
      include: {
        exercise_chapter: {
          include: {
            chapters: {
              include: {
                thematics: true;
              };
            };
          };
        };
      };
    };
  };
}>;

type ExerciseMatch = {
  exerciseId: number;
  matchedWords: string[];
};

type ViewMode = "grid" | "table";

interface ExamCardProps {
  exam: ExamWithDetails;
  matchingExercises: ExerciseMatch[];
  viewMode: ViewMode;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, matchingExercises, viewMode }) => {
  const getExamTitle = useCallback((exam: ExamWithDetails): string => {
    const { name: centerName } = exam.centers;
    const sessionSuffix = exam.session === 2 ? " - Remplacement" : "";
    return `${centerName}${sessionSuffix} (${exam.year.toString()})`;
  }, []);

  const isExerciseMatching = useCallback(
    (exerciseId: number): ExerciseMatch | undefined => {
      return matchingExercises.find((match) => match.exerciseId === exerciseId);
    },
    [matchingExercises]
  );

  const renderGridCard = () => (
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader>
        <CardTitle>{getExamTitle(exam)}</CardTitle>
        <div className="flex gap-2 mt-2">
          <Button variant="outline" size="sm" asChild>
            <a href={exam.paper} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Sujet
            </a>
          </Button>
          {exam.correction && (
            <Button variant="outline" size="sm" asChild>
              <a href={exam.correction} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Corrigé
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          {exam.exercises.map((exercise) => {
            const match = isExerciseMatching(exercise.id);
            return (
              <div
                key={exercise.id}
                className={`border rounded-lg p-3 transition-colors ${
                  match ? "bg-yellow-50 border-yellow-200" : ""
                }`}
              >
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold mb-2">
                    {exercise.title || `Exercice ${exercise.id}`}
                  </h3>
                  <div>
                    <ul className="list-disc list-inside space-y-1">
                      {exercise.exercise_chapter.map(({ chapters }) => (
                        <li key={chapters.id} className="text-sm">
                          {chapters.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  const renderTableRow = () => (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{getExamTitle(exam)}</td>
      <td className="px-4 py-3">
        <div className="space-y-1">
          {exam.exercises.map((exercise) => (
            <div key={exercise.id} className="text-sm">
              <span className="font-medium">
                {exercise.title || `Exercice ${exercise.id}`}
              </span>
              <ul className="ml-4 list-disc">
                {exercise.exercise_chapter.map(({ chapters }) => (
                  <li key={chapters.id}>{chapters.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={exam.paper} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Sujet
            </a>
          </Button>
          {exam.correction && (
            <Button variant="outline" size="sm" asChild>
              <a href={exam.correction} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Corrigé
              </a>
            </Button>
          )}
        </div>
      </td>
    </tr>
  );

  const renderCard = () => {
    if (viewMode === "table") {
      return renderTableRow();
    }
    return renderGridCard();
  };

  return <>{renderCard()}</>;
};

export default ExamCard;
