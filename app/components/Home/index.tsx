"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { Hero } from "./Hero";
import Subjects from "./Subjects";
import Services from "./Services";
import AboutUs from "./AboutUs";
import BannerContact from "@/components/generic/BannerContact";

// Déclaration des types pour les props
type SectionIntroProps = {
  title: string;
  subtitle: string;
};

// Classes utilisées fréquemment
const classNameSubtitle = "text-sm text-slate-400 mb-9";
const classNameSection =
  "w-full flex flex-col md:flex-row justify-center items-center gap-11";

const Home: React.FC = () => {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const isInView0 = useInView(ref0, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <>
      <div className="flex flex-col gap-[17.5rem] justify-center">
        <Hero />

        {/* Sections principales */}
        <div className="flex flex-col gap-[17.5rem] 2xl:px-[24.25rem]">
          {/* Première section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={isInView0 ? { ease: "easeInOut", duration: 1 } : {}}
          >
            <SectionIntro
              title="Améliore tes compétences en sciences"
              subtitle="Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser."
            />
            <Subjects />
          </motion.div>

          {/* Deuxième section */}
          <motion.div
            ref={ref1}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView1 ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 1 }}
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
              <ul className="text-slate-400 text-sm">
                <li>
                  • Améliore ta moyenne en maths, physique-chimie ou
                  informatique
                </li>
                <li>• Obtiens ton bac avec mention</li>
                <li>• Gagne en confiance dans tes capacités</li>
                <li>• Réussis tes concours post-bac</li>
                <li>
                  • Met toutes tes chances de ton côté pour trouver ton
                  orientation après le bac
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Troisième section */}
          <motion.div
            ref={ref2}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className={classNameSection}>
              <div className="flex flex-col gap-7">
                <h2 className={"textRight"}>Pour les étudiants en BAC+1/2/3</h2>
                <ul className="text-slate-400 text-sm">
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
          </motion.div>

          {/* Quatrième section */}
          <motion.div
            ref={ref4}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView4 ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <SectionIntro
              title="Des solutions pour tous les profils"
              subtitle="Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser."
            />
            <Services />
          </motion.div>

          {/* Cinquième section */}
          <motion.div
            ref={ref3}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className={cn(
              classNameSection,
              "flex flex-col md:flex md:flex-row"
            )}
          >
            <AboutUs />
          </motion.div>
        </div>
      </div>
      <BannerContact />
    </>
  );
};

export default Home;

// Composant SectionIntro avec les types
const SectionIntro: React.FC<SectionIntroProps> = ({ title, subtitle }) => (
  <div>
    <h2 className={"text-center"}>{title}</h2>
    <p className={cn(classNameSubtitle, "text-center")}>{subtitle}</p>
  </div>
);
