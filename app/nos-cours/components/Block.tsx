import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  title: string;
  id: string;
  content: ReactElement;
  infos: { icon: LucideIcon; description: string }[];
};

const Block = ({ title, id, content, infos }: Props) => {
  return (
    <div
      id={id}
      className=" bg-slate-100 w-full gap-28 flex flex-row p-12 items-start"
    >
      {/* Bloc de gauche */}
      <div className=" bg-slate-100 w-full gap-4 flex flex-col">
        <h2>{title}</h2>
        {content}
        <Button asChild className="self-start">
          <Link href="/contact">Je prends rendez-vous</Link>
        </Button>
      </div>
      {/* Bloc de droite */}
      <div className="bg-slate-200 p-4 gap-2 flex flex-col ">
        {infos.map((info, key) => (
          <p className="flex flex-row" key={key}>
            <info.icon className="mr-2 w-2 h-2" /> {info.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Block;
