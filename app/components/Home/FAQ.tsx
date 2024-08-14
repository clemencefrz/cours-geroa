import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ItemType = {
  value: string;
  answer: string;
  question: string;
};

const items: ItemType[] = [
  {
    value: "item-1",
    question: "Comment se déroulent les cours particuliers ?",
    answer:
      "L'élève prépare ses questions et le chapitre qu'il souhaite étudier à l'avance.",
  },
  {
    value: "item-2",
    question: "Question 2",
    answer: "Réponse 2",
  },
  {
    value: "item-3",
    question: "Question 3",
    answer: "Réponse 3",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map(({ value, answer, question }, key) => (
        <AccordionItem value={value} key={key}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
