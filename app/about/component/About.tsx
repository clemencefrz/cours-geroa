"use client";
import { motion, useInView } from "framer-motion";
import CardTutor from "./CardTutor";
import Title from "./Title";
import { PropsWithChildren, useRef } from "react";

const MotionDiv = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-col items-center justify-center gap-4"
    >
      <h2 className="text-center">{title}</h2>

      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-24 gap-24">
      <Title />

      {/* Clémence et Damien, Notre missions, nos valeurs */}
      <MotionDiv title={`Hey ! Bienvenue aux cours Geroa`}>
        {/* Image de nous deux */}
        <div className="h-[300px] min-w-[500px] bg-black gap-2" />

        <span>
          Nous sommes Clémence et Damien, deux ingénieurs Angloys. Notre mission
          ? Aider les lycéens et les étudiants à réussir dans leurs études et à
          trouver leur voie.
          <br />
          {`Nous croyons aux valeurs de la discipline et de la responsabilité pour aider chacun à se réaliser et à s'éduquer, toujours dans la bonne humeur.`}
        </span>
      </MotionDiv>

      {/* Qualifications, expériences et spécialisation */}
      <MotionDiv title={`À propos de nous...`}>
        <div className="lg:grid lg:grid-cols-2 gap-9">
          <CardTutor
            firstName="Clémence"
            job="Ingénieure informatique"
            cibles={[
              "Elèves lycéens niveau seconde, première et terminale",
              "Licence",
              "Master",
              "Ecole d'ingénieur",
              "Classes préparatoires",
            ]}
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
            cibles={["Elèves lycéens niveau seconde, première et terminale"]}
          />
        </div>
      </MotionDiv>

      {/* Notre vision */}
      <MotionDiv title={`Notre vision`}>
        <span>
          {`Parce que y'a pas que les cours dans la vie !`}
          <br />
          {`Nous aimerions développer une institution pour donner une chance aux élèves et aux jeunes du Pays Basque de croire en soi, de découvrir ce qui les fait vibrer, d'aller plus loins que les croyances limitantes.
          - On aimerait également aider les écoles `}
        </span>
      </MotionDiv>
    </div>
  );
};

export default About;
