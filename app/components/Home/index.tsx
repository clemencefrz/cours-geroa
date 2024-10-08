"use client";

import { useRef, ReactNode } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hero } from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import BannerContact from "@/components/generic/BannerContact";
import Skills from "./Skills";
import { FAQ, ItemTypeFAQ } from "./FAQ";

type SectionIntroProps = {
  title: string;
  subtitle: string;
};

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  animateOnce?: boolean;
};
const items: ItemTypeFAQ[] = [
  {
    value: "item-1",
    question: "Comment se déroulent les cours particuliers chez Cours Geroa ?",
    answer:
      "L'élève prépare ses questions et le chapitre qu'il souhaite étudier à l'avance. Le professeur de Cours Geroa adapte le contenu du cours en fonction des besoins spécifiques de l'élève, et le cours se déroule en présentiel.",
  },
  {
    value: "item-2",
    question: "Comment puis-je réserver un cours collectif chez Cours Geroa ?",
    answer:
      "Pour réserver un cours collectif, vous devez vous inscrire sur notre plateforme, choisir le cours souhaité parmi les options disponibles et effectuer la réservation en ligne. Vous recevrez une confirmation par email avec les détails du cours.",
  },
  {
    value: "item-3",
    question:
      "Quelles sont les qualifications des professeurs de Cours Geroa ?",
    answer:
      "Nous sommes deux ingénieurs passionés d'enseignements et nous avons beaucoup d'expériences dans le domaine des cours particuliers. Nous apprenons en autonomie les rouages de la pédagogie et nous nous efforçons de nous améliorer dans ce domaine. Pour en savoir plus, rendez-vous sur la page Qui sommes-nous :).",
  },
  {
    value: "item-4",
    question:
      "Combien coûte une séance de cours particulier de cours collectifs de Cours Geroa ?",
    answer:
      "Le prix des cours est variable selon le besoin de chacun. Pour en savoir plus, rendez-vous sur la page Contact.",
  },
  {
    value: "item-5",
    question: "Les cours Geroa sont-ils adaptés à tous les niveaux ?",
    answer:
      "Oui, nos cours sont adaptés à tous les niveaux, du débutant à l'avancé. Nos professeurs ajustent le contenu et le rythme en fonction du niveau de l'élève pour garantir une progression efficace.",
  },
  {
    value: "item-6",
    question: "Quels langages informatiques enseignez-vous chez Cours Geroa ?",
    answer:
      "Clémence se spécialise dans l’enseignement des langages Python, Matlab, JavaScript, HTML, et CSS. Elle propose également des cours d'algorithmie de base ainsi que des sessions pratiques sur les IA LLM (comme ChatGPT, Gemini, etc.), et comment les utiliser intelligemment.",
  },
];

const classNameSubtitle = "text-sm text-slate-400 mb-9";
const classNameSection =
  "w-full flex flex-col md:flex-row justify-center items-center gap-11";

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className,
  animateOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: animateOnce });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <div className="flex flex-col gap-24 2xl:px-[24.25rem]">
        <MotionSection>
          <SectionIntro
            title="Améliore tes compétences en sciences"
            subtitle="Choisis la ou les matières scientifiques enseignées chez Cours Geroa sur lesquelles tu souhaiterais progresser."
          />
          <Skills
            skills={["Physique-chimie", "Mathématiques", "Informatique"]}
          />
        </MotionSection>

        <MotionSection>
          <SectionIntro
            title="Développe tes qualités personnelles"
            subtitle="Au-delà des compétences académiques, avec Cours Geroa on t'aide à développer des compétences essentielles pour réussir tant dans tes études que dans ta vie professionnelle."
          />
          <div className="flex flex-col gap-8 md:flex-row">
            {[
              "Communication orale et écrite",
              "Gestion efficace du temps",
              "Développement de l'esprit critique",
              "Gestion du stress et résilience",
            ].map((skill, key) => (
              <motion.div
                className="flex flex-col gap-2 items-center"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                key={key}
              >
                <p className="font-bold text-[1.25rem] text-center">{skill}</p>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          className={cn(
            classNameSection,
            "flex flex-col-reverse md:flex-row justify-center items-center w-full"
          )}
        >
          <div className="svg-container">
            <Image
              src="/assets/Learning-pana.svg"
              alt="People illustrations by Storyset"
              width={250}
              height={250}
            />
            <a
              href="https://storyset.com/people"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extralight text-slate-200"
            >
              People illustrations by Storyset
            </a>
          </div>
          <div className="flex flex-col gap-7">
            <h2>Pour les lycéens de Seconde, Première et Terminale</h2>
            <ul>
              <li>
                • Améliore ta moyenne en maths, physique-chimie ou informatique
              </li>
              <li>• Obtiens ton bac avec mention</li>
              <li>• Gagne en confiance dans tes capacités</li>
              <li>• Réussis tes concours post-bac</li>
              <li>
                • Mets toutes tes chances de ton côté pour trouver ton
                orientation après le bac
              </li>
            </ul>
          </div>
        </MotionSection>

        <MotionSection>
          <div className={classNameSection}>
            <div className="flex flex-col gap-7">
              <h2 className="textRight">Pour les étudiants en BAC+1/2/3</h2>
              <ul>
                <li>• Réussis tes examens et valide ton année</li>
                <li>• Gagne en autonomie et en organisation</li>
                <li>• Prépare tes concours</li>
                <li>• Trouve un stage facilement</li>
              </ul>
            </div>
            <div className="svg-container">
              <Image
                src="/assets/pana.svg"
                alt="People illustrations by Storyset"
                width={250}
                height={250}
              />
              <a
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extralight text-slate-200"
              >
                People illustrations by Storyset
              </a>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <SectionIntro
            title="Des solutions pour tous les profils"
            subtitle="Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser."
          />
          <Services />
        </MotionSection>

        <MotionSection
          className={cn(classNameSection, "flex flex-col md:flex md:flex-row")}
        >
          <AboutUs />
        </MotionSection>
      </div>

      <BannerContact />
      <FAQ items={items} />
    </>
  );
};

export default Home;

const SectionIntro: React.FC<SectionIntroProps> = ({ title, subtitle }) => (
  <div>
    <h2 className="text-center">{title}</h2>
    <p className={cn(classNameSubtitle, "text-center")}>{subtitle}</p>
  </div>
);
