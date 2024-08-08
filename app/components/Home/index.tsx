"use client";

import { HeaderHome } from "./HeaderHome";
import { SectionFAQ } from "./SectionFAQ";
import SectionForWho from "./SectionForWho";
import SectionOurServices from "./SectionOurServices";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeaderHome />
      {/* Master your maths physique info */}

      <SectionOurServices />

      <SectionForWho />

      {/* Témoignages et preuves sociales */}

      <div>
        <h2>Foire Aux Questions</h2>
        <SectionFAQ />
      </div>
    </div>
  );
};

export default Home;
