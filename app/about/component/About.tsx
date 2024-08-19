"use client";
import { motion, useInView } from "framer-motion";
import CardTutor from "./CardTutor";
import Title from "./Title";
import { useRef } from "react";

const About = () => {
  const ref0 = useRef<HTMLDivElement>(null);

  const isInView0 = useInView(ref0, { once: true });
  return (
 
 
 <div className="w-full flex flex-col items-center justify-center px-24 gap-24">
      <Title />

      {/* Clémence et Damien, Notre missions, nos valeurs*/}
      <motion.div
        ref={ref0}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView0 ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex flex-row items-start justify-center gap-4"
      >
        {/* Image de nous deux */}
        <div className="h-[300px] min-w-[500px] bg-black gap-2" />
        <div className="flex flex-col gap-1">
          <h2 className="self-end text-justify">{`Hey ! Bienvenue aux cours Geroa.`}</h2>
          <span>
            Nous sommes Clémence et Damien, deux ingénieurs Angloys (et fiers!).
            Notre mission ? Aider les lycéens et les étudiants à réussir dans
            leurs études et à trouver leur voie.
            <br></br>
            {` Nous croyons aux valeurs de la discipline et de la responsabilité
            pour aider chacun à se réaliser et à s'éduquer, toujours dans la
            bonne humeur.`}
          </span>
        </div>
      </motion.div>

      {/* Qualifications, expériences et spécialisation */}
      <div className="flex flex-col items-center justify-start gap-4">
        <h2 className="self-start">{`À propos de nous...`}</h2>

        <div className="grid grid-cols-2 gap-16">
          <CardTutor
            firstName="Clémence"
            job="Ingénieure informatique"
            subjects={[
              "Les mathématiques",
              "La physique-chimie",
              "L'informatique (Python, Typescript, Matlab, etc.)",
            ]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, je suis entrée dans une grande école d'ingénieur toulousaine (l'ENSEEIHT). C'est là que j'ai commencé les cours particuliers, d'abord en agence (Complétude), puis avec mon école (Cours particuliers à des prépa) et enfin en auto-entreprise (des élèves du lycée Villa Pia, d'ISA BTP, d'EPITA...)`}
          />
          <CardTutor
            firstName="Damien"
            job="Ingénieur dans l'énergie du bâtiment"
            subjects={["Les mathématiques"]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, j'ai été ..`}
          />
        </div>
      </div>

      {/* Notre vision */}
      <div className="flex flex-row items-start justify-center gap-4">
        {/* Image de nous deux */}
        <div className="flex flex-col gap-1">
          <h2 className="self-end text-justify">{`Notre vision`}</h2>
          <span>
            {` Parce que y'a pas que les cours dans la vie !`}
            <br></br>
            {` sdqsdqsdqsds`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
