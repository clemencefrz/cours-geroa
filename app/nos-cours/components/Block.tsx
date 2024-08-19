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
      className="shadow-[6px_6px_0px] shadow-brandFour border-slate-200 border w-full gap-12 flex flex-col md:flex-row items-center p-12 md:items-start rounded-lg text-justify"
    >
      {/* Bloc de gauche */}
      <div className="w-full flex flex-col gap-6">
        <h2 className="w-max bg-gradient-to-b from-transparent to-brandThree from-40%">
          {title}
        </h2>
        {content}
        <Button asChild className="md:self-start mt-9">
          <Link href="/contact">Je prends rendez-vous</Link>
        </Button>
      </div>
      {/* Bloc de droite */}
      <div className="border rounded-lg border-slate-200 p-4 gap-4 flex flex-col lg:min-w-[396px] bg-brandFour text-white font-semibold">
        {infos.map((info, key) => (
          <p className="flex flex-row items-center" key={key}>
            <info.icon className="mr-2" /> {info.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Block;
