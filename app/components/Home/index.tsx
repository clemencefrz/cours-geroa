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

type SectionIntroProps = {
  title: string;
  subtitle: string;
};

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  animateOnce?: boolean;
};

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
            subtitle="Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser."
          />
          <Skills
            skills={["Physique-chimie", "Mathématiques", "Informatique"]}
          />
        </MotionSection>

        <MotionSection>
          <SectionIntro
            title="Développe tes qualités personnelles"
            subtitle="Au-delà des compétences académiques, on t'aide à développer des compétences essentielles pour réussir tant dans tes études que dans ta vie professionnelle."
          />
          <div className="flex flex-col md:flex-row">
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
