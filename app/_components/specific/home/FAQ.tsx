import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/design-system/accordion";

export type ItemTypeFAQ = {
  value: string;
  answer: string;
  question: string;
};

export function FAQ({ items }: { items: ItemTypeFAQ[] }) {
  return (
    <div className="mt-9">
      <p className="font-bold text-2xl">Foire aux questions</p>
      <Accordion type="single" collapsible className="w-full">
        {items.map(({ value, answer, question }, key) => (
          <AccordionItem value={value} key={key}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
