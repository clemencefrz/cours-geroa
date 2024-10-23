import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/_components/design-system/accordion";
import { Exercise } from "@/src/entities/exercises";
import "katex/dist/katex.min.css";
import { Eye } from "lucide-react";
import Latex from "react-latex-next";

type Props = { exercise: Exercise };

const ExerciseAccordion: React.FC<Props> = ({ exercise }): JSX.Element => {
  return (
    <>
      <h2 className="font-semibold">Exercice n°{exercise.id}</h2>
      <Latex>{exercise.statement}</Latex>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger>
            <div className="inline-flex justif-center items-center gap-2 hover:bg-accent p-2 rounded-lg">
              <h3 className="font-semibold">Afficher la solution</h3> <Eye />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Latex>{exercise.solution}</Latex>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ExerciseAccordion;
