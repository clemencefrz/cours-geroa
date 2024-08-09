"use client";

import { HeaderHome } from "./HeaderHome";
import { SectionFAQ } from "./SectionFAQ";
import SectionForWho from "./SectionForWho";
import SectionOurServices from "./SectionOurServices";
export const classNameSection = "flex flex-col bg-slate-200 p-12 gap-8";
const classNameH2 = "text-4xl font-bold text-center";
const classNameSubtitle = "text-2xl text-center mb-12";
const Home = () => {
  return (
    <div className="flex flex-col gap-24 justify-center">
      <HeaderHome />

      <div>
        <h2 className={classNameH2}>
          {`Progresse et maîtrise les Math, Physique, Info`}
        </h2>
        <p className={classNameSubtitle}>{`Fini les galères`}</p>
        <SectionOurServices />
      </div>

      <div>
        <h2
          className={classNameH2}
        >{`Réussit tes examens, ton Bac et prend confiance`}</h2>
        <p className={classNameSubtitle}>{`Fini les galères`}</p>
        <SectionForWho />
      </div>

      <div>
        <h2
          className={classNameH2}
        >{`Trouve un soutien fiable et Exploite ton potentiel`}</h2>
        <p className={classNameSubtitle}>{`Dans la bonne humeur`}</p>
        <div>Pourquoi choisir Geroa</div>
      </div>

      <div>
        <h2>Foire Aux Questions</h2>
        <SectionFAQ />
      </div>
    </div>
  );
};

export default Home;
