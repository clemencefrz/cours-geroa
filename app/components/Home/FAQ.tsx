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
      "L'élève prépare ses questions et le chapitre qu'il souhaite étudier à l'avance. Le professeur adapte le contenu du cours en fonction des besoins spécifiques de l'élève, et le cours se déroule en ligne ou en présentiel selon les préférences.",
  },
  {
    value: "item-2",
    question: "Comment puis-je réserver un cours collectif ?",
    answer:
      "Pour réserver un cours collectif, vous devez vous inscrire sur notre plateforme, choisir le cours souhaité parmi les options disponibles et effectuer la réservation en ligne. Vous recevrez une confirmation par email avec les détails du cours.",
  },
  {
    value: "item-3",
    question: "Quelles sont les qualifications des professeurs ?",
    answer:
      "Tous nos professeurs sont hautement qualifiés dans leurs domaines respectifs. Ils possèdent des diplômes académiques pertinents ainsi qu'une expérience significative dans l'enseignement, ce qui leur permet de s'adapter aux besoins de chaque élève.",
  },
  {
    value: "item-4",
    question: "Puis-je choisir mon professeur ?",
    answer:
      "Oui, vous avez la possibilité de choisir le professeur qui vous convient le mieux en fonction de son profil, de ses qualifications et des avis laissés par d'autres élèves. Vous pouvez également demander une recommandation si vous hésitez.",
  },
  {
    value: "item-5",
    question: "Les cours sont-ils adaptés à tous les niveaux ?",
    answer:
      "Oui, nos cours sont adaptés à tous les niveaux, du débutant à l'avancé. Nos professeurs ajustent le contenu et le rythme en fonction du niveau de l'élève pour garantir une progression efficace.",
  },
];

export function FAQ() {
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
