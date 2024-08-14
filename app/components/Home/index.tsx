"use client";

import { cn } from "@/lib/utils";
import { Hero } from "./Hero";
import { SectionFAQ } from "./SectionFAQ";
import Subjects from "./Subjects";
import Image from "next/image";
import Services from "./Services";

const classNameH2 = "text-2xl font-bold";
const classNameSubtitle = "text-sm text-slate-400 mb-9";
const Home = () => {
  return (
    <div className="flex flex-col gap-9 justify-center">
      <Hero />

      {/* Sections */}
      <div className="flex flex-col gap-[6.75rem]">
        <div>
          <h2 className={cn(classNameH2, "text-center")}>
            {`Améliore tes compétences en sciences`}
          </h2>
          <p
            className={cn(classNameSubtitle, "text-center")}
          >{`Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser.`}</p>
          <Subjects />
        </div>

        <div className="w-full flex flex-row justify-center items-center gap-11">
          <div className="svg-container">
            <Image
              src="/assets/Learning-pana.svg"
              alt=""
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
            <h2
              className={cn(classNameH2, "text-right")}
            >{`Lycéens niveau Seconde, Première et Terminale`}</h2>
            <ul className="text-slate-400 text-sm">
              <li>• Réussit le bac en toute confiance</li>
              <li>• Réussit le bac en toute confiance</li>
              <li>• Réussit le bac en toute confiance</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center gap-11">
          <div className="flex flex-col gap-7">
            <h2
              className={cn(classNameH2, "text-right")}
            >{`Etudiants en BAC+1/2/3`}</h2>
            <ul className="text-slate-400 text-sm">
              <li>• Réussit le bac en toute confiance</li>
              <li>• Réussit le bac en toute confiance</li>
              <li>• Réussit le bac en toute confiance</li>
            </ul>
          </div>
          <div className="svg-container">
            <Image src="/assets/pana.svg" alt="" width={250} height={250} />
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

        <div>
          <h2 className={cn(classNameH2, "text-center")}>
            {`Des solutions pour tous les profils`}
          </h2>
          <p
            className={cn(classNameSubtitle, "text-center")}
          >{`Choisis la ou les matières scientifiques sur lesquelles tu souhaiterais progresser.`}</p>
          <Services />
        </div>

        <div>
          <h2>Foire Aux Questions</h2>
          <SectionFAQ />
        </div>
      </div>
    </div>
  );
};

export default Home;
