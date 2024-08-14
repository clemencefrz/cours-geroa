"use client";

import { cn } from "@/lib/utils";
import { Hero } from "./Hero";
import { SectionFAQ } from "./SectionFAQ";
import SectionForWho from "./SectionForWho";
import SectionWhyUs from "./SectionWhyUs";
import Subjects from "./Subjects";

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

        <div>
          <h2
            className={cn(classNameH2, "text-left")}
          >{`On s'adapte à ton profil.`}</h2>
          <p
            className={classNameSubtitle}
          >{`Et on t'aider à gagner en confiance.`}</p>
          <SectionForWho />
        </div>

        <div>
          <h2
            className={cn(classNameH2, "text-right")}
          >{`Trouve un soutien fiable`}</h2>
          <p
            className={cn(classNameSubtitle, "text-right")}
          >{`libère ton plein potentiel, sans stress`}</p>
          <SectionWhyUs />
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
