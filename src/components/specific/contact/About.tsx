"use client";
import { motion, useInView } from "framer-motion";
import CardTutor from "./CardTutor";
import Title from "./Title";
import { PropsWithChildren, useRef } from "react";

export const MotionDiv = ({
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
      className="flex flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <h2 className="text-center text-wrap">{title}</h2>

      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:px-24 gap-24">
      <Title />


      <MotionDiv title={`Hey ! Bienvenue aux cours Geroa`}>
        <span>
          {`Basés à Anglet, nous accompagnons les lycéens et les étudiants dans leur réussite scolaire et leur orientation, afin qu’ils construisent sereinement leur avenir.`}
          <br />
          {`Nous croyons que chacun a la capacité de se réaliser et à s'éduquer, toujours dans la bonne humeur.`}
        </span>
      </MotionDiv>

      <MotionDiv title={`À propos de nous...`}>
        <div className="lg:grid lg:grid-cols-2 gap-9">
          <CardTutor
            firstName="Benjamin"
            job="Maître d'œuvre dans le secteur de la construction"
            formation="Classe préparatoire PCSI, BTS Études et Économie de la Construction, Licence Économie, Management, Reprise et Création d'Entreprise"
            subjects={["Les mathématiques"]}
            qualifications={`Après mes années au lycée Villa Pia à Bayonne, j'ai poursuivi mes études en classe préparatoire PCSI, une formation exigeante qui m'a permis de développer de solides compétences en mathématiques et en sciences.
J'ai ensuite obtenu un BTS Études et Économie de la Construction ainsi qu'une Licence en Économie, Management, Reprise et Création d'Entreprise. J'exerce aujourd'hui le métier de maître d'œuvre dans le secteur de la construction depuis plus de 6 ans.
Parallèlement à mon activité professionnelle, je donne des cours particuliers de mathématiques depuis bientôt 4 ans. Cette expérience m'a permis d'accompagner de nombreux élèves aux profils variés, aussi bien pour combler des lacunes que pour gagner en confiance ou préparer des examens.`}
            cibles={[
              "Élèves de collège",
              "Élèves de lycée (seconde, première et terminale)",
            ]}
          />
          <CardTutor
            firstName="Damien"
            job="Ingénieur dans l'énergie du bâtiment (ETCHART)"
            formation="Math sup/Math spé puis Master en Génie Civil"
            subjects={["Les mathématiques"]}
            qualifications={`Après mes années lycée à Villa Pia (Bayonne), je suis parti en classe prépa Math Sup/ Math Spé à Louis Barthou (Pau).
J'ai ensuite intégré l'Université de Toulouse où j'ai obtenu une Licence puis un Master en Génie Civil.
Je travaille aujourd'hui à Anglet en tant qu'ingénieur en performance énergétique et environnementale des bâtiments au sein de l'entreprise TIKOAM (filiale du groupe ETCHART).
Depuis mes années en prépa, je donne régulièrement des cours particuliers à des lycéens. J'ai également animé des sessions de cours de soutien collectifs en étant tuteur pour le CNAM (10-18 élèves par cours)`}
            cibles={["Elèves lycéens niveau seconde, première et terminale"]}
            srcImage="/images/damien.jpeg"
          />
          <CardTutor
            firstName="Clémence"
            job="Ingénieure informatique"
            formation="Math sup/Math spé puis École d'ingénieur ENSEEIHT"
            cibles={[
              "Elèves lycéens première et terminale souhaitant un cours ponctuel révision du bac",
              "Classes préparatoires, écoles d'ingénieur, études supérieures",
            ]}
            subjects={[
              "Les mathématiques",
              "La physique-chimie",
              "L'informatique (Python, Typescript, Matlab, Javascript etc.)",
            ]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, je suis entrée dans une grande école d'ingénieur toulousaine (l'ENSEEIHT). C'est là que j'ai commencé les cours particuliers, d'abord en agence (Complétude), puis avec mon école (Cours particuliers à prépas) et enfin en auto-entreprise (des élèves du lycée Villa Pia, d'ISA BTP, d'EPITA...). J'ai également donné des cours à l'IUT de Bayonne.`}
            srcImage="/images/clemence.jpeg"
          />
        </div>
      </MotionDiv>

      <MotionDiv title="Notre vision">
        <div className="flex flex-col items-center gap-8 p-6 border-slate-200 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Accompagner sans remplacer`}</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {`Nous considérons chaque étudiant, peu importe son âge, comme responsable et autonome. Nous avons la conviction que chaque élève que nous rencontrons a les capacités de savoir ce dont il a besoin pour progresser, et peut nous le demander, le communiquer.`}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Bienveillance et dépassement`}</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {`Chaque personne est différente. L'élève vient avec ses forces, ses faiblesses, ses questionnements qui peuvent varier aussi d'un jour à l'autre. Nous ne sommes pas des robots. Notre rôle est d'accompagner l'élève en nous adaptant à lui, dans la bienveillance et dans l'optique d'atteindre des objectifs ambitieux.`}
            </p>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default About;
