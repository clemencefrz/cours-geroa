import {
  PointsCoursCollectifs,
  PointsCoursParticuliers,
} from "@/app/nos-cours/components/NosCours";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-16">
      <CardService
        title="Cours particuliers"
        bulletPoints={PointsCoursParticuliers}
      />
      <CardService
        title="Cours collectifs"
        bulletPoints={PointsCoursCollectifs}
      />
      <CardService title="Ressources" bulletPoints={PointsCoursParticuliers} />
    </div>
  );
};

export default Services;

const CardService = ({
  title,
  bulletPoints,
}: {
  title: string;
  bulletPoints: { icon: LucideIcon; description: string }[];
}) => {
  return (
    <div className="flex flex-col rounded-md border border-slate-400 shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-9 gap-4">
      <h3 className="font-bold text-lg self-center">{title}</h3>
      <ul>
        {bulletPoints.map(({ description }, key) => (
          <li
            className="font-medium text-md"
            key={key}
          >{`• ${description}`}</li>
        ))}
      </ul>
      <Button asChild className="self-center">
        <Link href="/nos-cours">En savoir +</Link>
      </Button>
    </div>
  );
};
