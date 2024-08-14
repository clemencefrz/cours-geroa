import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


const Subjects = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
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
    <motion.div
      className="flex flex-col gap-2 items-center"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <p className="font-bold text-[1.25rem]">{title}</p>
      <div
        className={cn(bgColor, "rounded-full h-36 w-36 flex flex-col gap-2")}
      />
    </motion.div>
  );
};
