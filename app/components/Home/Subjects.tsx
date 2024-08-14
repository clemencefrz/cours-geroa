import { cn } from "@/lib/utils";

const Subjects = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      <CardMatiere title={"Physique-chimie"} bgColor={"bg-brandTwo"} />
      <CardMatiere title={"Mathématiques"} bgColor={"bg-brandThree"} />
      <CardMatiere title={"Informatique"} bgColor={"bg-brandFour"} />
    </div>
  );
};

export default Subjects;

const CardMatiere = ({
  title,
  bgColor,
}: {
  title: string;
  bgColor: string;
}) => {
  return (
    <div className={"flex flex-col gap-2 items-center"}>
      <p className="font-bold text-[1.25rem]">{title}</p>
      <div
        className={cn(bgColor, "rounded-full h-36 w-36 flex flex-col gap-2")}
      ></div>
    </div>
  );
};
