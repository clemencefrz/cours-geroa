import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { Exercise } from "../type";

type Props = { exercise: Exercise };

const ExerciseAccordion: React.FC<Props> = ({ exercise }): JSX.Element => {
  return (
    <>
      <h2 className="font-semibold">{exercise.title}</h2>
      <Latex>{exercise.problemStatement}</Latex>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger>
            <h2 className="font-semibold">Afficher la solution</h2>
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
