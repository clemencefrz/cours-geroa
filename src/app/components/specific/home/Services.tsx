import {
  PointsCoursCollectifs,
  PointsCoursParticuliers,
} from "@/src/app/components/specific/nos-cours/NosCours";
import { Button } from "@/src/app/components/design-system/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Smartphone, UserCheck, Lightbulb } from "lucide-react";

const Ressources = {
  points: [
    {
      icon: FileText,
      description: "Exercices en parfaite adéquation avec le programme",
    },
    {
      icon: Smartphone,
      description: "Une application dédiée pour nos élèves",
    },
    {
      icon: UserCheck,
      description:
        "Interviews de professionnels du Pays Basque pour découvrir les métiers",
    },
    {
      icon: Lightbulb,
      description:
        "Articles de blog et astuces pour mieux apprendre et trouver sa voie",
    },
  ],
  href: "/login",
};

const Services = () => {
  return (
    <div className="grid flex-col md:grid-cols-3 items-start justify-center gap-11">
      <CardService
        title="Cours particuliers"
        bulletPoints={PointsCoursParticuliers.points}
        href={PointsCoursParticuliers.href}
      />
      <CardService
        title="Cours collectifs"
        bulletPoints={PointsCoursCollectifs.points}
        href={PointsCoursCollectifs.href}
      />
      <CardService
        title="Ressources"
        bulletPoints={Ressources.points}
        href={Ressources.href}
      />
    </div>
  );
};

export default Services;

const CardService = ({
  title,
  bulletPoints,
  href,
}: {
  title: string;
  bulletPoints: { icon: LucideIcon; description: string }[];
  href: string;
}) => {
  return (
    <motion.div
      className="flex flex-col h-full rounded-md border border-slate-400 shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-9 gap-4"
      whileHover={{ y: -10 }} // Lift the card by 10px on hover
      transition={{ type: "spring", stiffness: 200, damping: 20 }} // Smooth spring-like animation
    >
      <h3 className="self-center">{title}</h3>
      <ul>
        {bulletPoints.map(({ description, icon: Icon }, key) => (
          <li className="font-medium text-md flex items-start" key={key}>
            <Icon className="mr-2 w-5 h-5 mt-0.5" />
            {description}
          </li>
        ))}
      </ul>
      <Button asChild className="self-center mt-auto">
        <Link href={href}>En savoir +</Link>
      </Button>
    </motion.div>
  );
};
