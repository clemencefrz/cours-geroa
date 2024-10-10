import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Latex from "react-latex-next";

interface ExerciseAccordionProps {
  exercise: { title: string; enonce: string };
  solution: string;
}

const ExerciseAccordion: React.FC<ExerciseAccordionProps> = ({
  exercise,
  solution,
}) => {
  return (
    <>
      {/* Exercice */}
      <h2 className="font-semibold">{exercise.title}</h2>
      <Latex>{exercise.enonce}</Latex>
      <Accordion type="single" collapsible>
        {/* Solution */}
        <AccordionItem value="solution">
          <AccordionTrigger>
            <h2 className="font-semibold">Afficher la solution</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Latex>{solution}</Latex>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ExerciseAccordion;
