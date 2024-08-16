"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="ContainerHeaderPage"
      >
        {`En basque, Geroa fait référence à `}
        <Highlight className="text-white">{`l'avenir.`}</Highlight>
        <br />
        {`Bâtissez le votre dès aujourd'hui.`}
      </motion.h1>
    </HeroHighlight>
  );
};

export default Title;
