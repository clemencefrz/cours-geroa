import { Calendar, Clock, DollarSign, MapPin, User, Users } from "lucide-react";
import Block from "./Block";

export const PointsCoursParticuliers = [
  { icon: MapPin, description: "À Anglet" },
  {
    icon: Calendar,
    description: "Le mercredi soir ou le samedi matin",
  },
  { icon: Users, description: "En petit groupe de 4 élèves maximum" },
  { icon: DollarSign, description: "Tarif avantageux" },
];

export const PointsCoursCollectifs = [
  { icon: MapPin, description: "À Anglet" },
  {
    icon: Calendar,
    description: "Le soir en semaine",
  },
  { icon: Clock, description: "Séances hebdomadaires de 1h30 à 2h00" },
  {
    icon: User,
    description: `Suivi personnalisé des progrès de l'élève`,
  },
  {
    icon: User,
    description: `Bilan régulier tout au long de l'année`,
  },
];
const NosCours = () => {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <h1 className="p-8">Nos cours</h1>
      <h2>
        {`Chez Geroa, on fait aimer les maths, la physique-chimie et
        l'informatique à tous les lycéens et étudiants, peu importe leur niveau
        !`}
      </h2>

      {/* Les cours collectifs */}
      <Block
        title={"Nos cours collectifs"}
        id={"cours-collectifs"}
        content={
          <div className="flex flex-col gap-8">
            <p className="text-justify">
              {`Les cours collectifs Geroa s'adressent aux lycéens et aux étudiants. Chaque semaine, les élèves travaillent en petit groupe (3-4), progressent à leur rythme, tout ça dans une bonne ambiance !`}
            </p>
            <div>
              <p>{`Envie d'apprendre en groupe ? On propose deux options :`}</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl">
                    Les sessions de soutien scolaire
                  </h3>
                  <p>{`Pour rester alignés avec leur programme, les élèves et étudiants sélectionnent chaque semaine un cours correspondant au chapitre qu’ils étudient sur le moment.
              
              Plus détailler comment ça se passe le cours : chacun vient avec son chapitre à réviser et ses questions, en amont ils peeuvent demander des exos à l'avance, s'ils ont pas d'idées on leur propose, ça peut être individuel`}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    {`Les cours de renforcement`}
                  </h3>
                  <p>
                    {`Ces cours sont réservés aux lycéens. Pendant les cours de renforcement, le groupe d'élève choissit à l'avance un chapitre précis du programme et on le révise en profondeur tous ensemble.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        infos={PointsCoursParticuliers}
      />

      {/* Les cours particuliers */}
      <Block
        title={"Nos cours particuliers"}
        id={"cours-particuliers"}
        content={
          <div className="flex flex-col gap-8">
            <p className="text-justify">
              {`Les cours collectifs Geroa s'adressent aux lycéens et aux étudiants. Chaque semaine, les élèves travaillent en petit groupe (3-4), progressent à leur rythme, tout ça dans une bonne ambiance !`}
            </p>
            <div>
              <p>{`Envie d'apprendre en groupe ? On propose deux options :`}</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl">
                    Les sessions de soutien scolaire
                  </h3>
                  <p>{`Pour rester alignés avec leur programme, les élèves et étudiants sélectionnent chaque semaine un cours correspondant au chapitre qu’ils étudient sur le moment.
              
              Plus détailler comment ça se passe le cours : chacun vient avec son chapitre à réviser et ses questions, en amont ils peeuvent demander des exos à l'avance, s'ils ont pas d'idées on leur propose, ça peut être individuel`}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    {`Les cours de renforcement`}
                  </h3>
                  <p>
                    {`Ces cours sont réservés aux lycéens. Pendant les cours de renforcement, le groupe d'élève choissit à l'avance un chapitre précis du programme et on le révise en profondeur tous ensemble.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        infos={PointsCoursCollectifs}
      />

      {/* Les stages */}
      <Block
        title={"Nos stages"}
        id={"stages"}
        content={<p>à venir</p>}
        infos={[
          {
            icon: Clock,
            description: "Séances de 3h30",
          },
          {
            icon: Calendar,
            description: "Pendant les vacances scolaires",
          },
          {
            icon: Users,
            description: "Révisions en groupe de 4 élèves maximum",
          },
        ]}
      />
    </div>
  );
};
export default NosCours;
