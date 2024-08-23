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
      "L'élève prépare ses questions et le chapitre qu'il souhaite étudier à l'avance. Le professeur adapte le contenu du cours en fonction des besoins spécifiques de l'élève, et le cours se déroule en présentiel.",
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
      "Nous sommes deux ingénieurs passionés d'enseignements et nous avons beaucoup d'expériences dans le domaine des cours particuliers. Nous apprenons en autonomie les rouages de la pédagogie et nous nous efforçons de nous améliorer dans ce domaine. Pour en savoir plus, rendez-vous sur la page Qui sommes-nous :).",
  },
  {
    value: "item-4",
    question:
      "Combien coûte une séance de cours particulier de cours collectifs ?",
    answer:
      "Le prix des cours est variable selon le besoin de chacun. Pour en savoir plus, rendez-vous sur la page Contact.",
  },
  {
    value: "item-5",
    question: "Les cours sont-ils adaptés à tous les niveaux ?",
    answer:
      "Oui, nos cours sont adaptés à tous les niveaux, du débutant à l'avancé. Nos professeurs ajustent le contenu et le rythme en fonction du niveau de l'élève pour garantir une progression efficace.",
  },
  {
    value: "item-6",
    question: "Quels langages informatiques enseignez-vous ?",
    answer:
      "Clémence se spécialise dans l’enseignement des langages Python, Matlab, JavaScript, HTML, et CSS. Elle propose également des cours d'algorithmie de base ainsi que des sessions pratiques sur les IA LLM (comme ChatGPT, Gemini, etc.), et comment les utiliser intelligemment.",
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
