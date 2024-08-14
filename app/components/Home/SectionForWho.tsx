import { CircleCheck } from "lucide-react";

const SectionForWho = () => {
  const cardsData = [
    {
      title: "Lycéen",
      descriptions: [
        "Décroche ton diplôme en toute confiance.",
        "Prépare-toi efficacement pour intégrer l'école de tes rêves.",
      ],
    },
    {
      title: "Etudiant : excelle dans ton Bac+1/2/3",
      descriptions: [
        "Mets toutes les chances de ton côté pour réussir tes épreuves d'études supérieures",
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-4 justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            descriptions={card.descriptions}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionForWho;

const Card = ({
  title,
  descriptions,
}: {
  title: string;
  descriptions: string[];
}) => {
  return (
    <div className="bg-slate-400 rounded-lg p-8 flex flex-col">
      <h3 className="font-bold">{title}</h3>
      <ul>
        {descriptions.map((description, key) => (
          <li key={key} className="flex flex-row items-start">
            <CircleCheck className="h-4 w-4 mr-2" />
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
