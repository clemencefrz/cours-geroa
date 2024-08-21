import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const bgColors = ["bg-brandTwo", "bg-brandThree", "bg-brandFour"];

const Skills = ({ skills }: { skills: [string, ...string[]] }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-9 md:items-end w-full">
      {skills.map((skill, index) => (
        <Card
          key={index}
          title={skill}
          bgColor={bgColors[index % bgColors.length]}
        />
      ))}
    </div>
  );
};

export default Skills;

const Card = ({ title, bgColor }: { title: string; bgColor: string }) => {
  return (
    <motion.div
      className="flex flex-col gap-2 items-center"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <p className="font-bold text-[1.25rem] text-center">{title}</p>
      <div
        className={cn(bgColor, "rounded-full h-36 w-36 flex flex-col gap-2")}
      />
    </motion.div>
  );
};
