"use client";

import { cn } from "@/lib/utils";
import { HeaderHome } from "./HeaderHome";
import { SectionFAQ } from "./SectionFAQ";
import SectionForWho from "./SectionForWho";
import SectionOurServices from "./SectionOurServices";
import SectionWhyUs from "./SectionWhyUs";
export const classNameSection = "flex flex-col bg-slate-200 p-12 gap-8";
const classNameH2 = "text-4xl font-bold";
const classNameSubtitle = "text-2xl mb-12";
const Home = () => {
  return (
    <div className="flex flex-col gap-24 justify-center">
      <HeaderHome />

      <div>
        <h2 className={cn(classNameH2, "text-center")}>
          {`On est là pour t'aider`}
        </h2>
        <p
          className={cn(classNameSubtitle, "text-center")}
        >{`Fini les galères`}</p>
        <SectionOurServices />
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
  );
};

export default Home;
