import Block from "./Block";
import { PointsCoursCollectifs } from "./NosCours";

const CoursCollectifs = () => {
  return (
    <Block
      title={"Nos cours collectifs"}
      id={"cours-collectifs"}
      content={
        <div className="flex flex-col gap-8">
          <p>
            {`Les cours collectifs Geroa s'adressent aux lycéens et aux étudiants. Chaque semaine, les élèves travaillent en petit groupe (3-5), progressent à leur rythme, tout ça dans une bonne ambiance !`}
          </p>

          <div>
            <h3 className="font-semibold text-xl">
              Les sessions de soutien scolaire
            </h3>
            <p>{`Pour rester alignés avec leur programme, les élèves et étudiants sélectionnent chaque semaine un cours correspondant au chapitre qu’ils étudient sur le moment.
              
              Chacun vient avec son chapitre à réviser et ses questions, en amont ils peuvent demander des exos à l'avance, s'ils ont pas d'idées on leur propose, ça peut être individuel`}</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              {`Les cours de renforcement`}
            </h3>
            <p>
              {`Ces cours sont réservés aux lycéens. Pendant les cours de renforcement, le groupe d'élève choisit à l'avance un chapitre précis du programme et on le révise en profondeur tous ensemble.`}
            </p>
          </div>
        </div>
      }
      infos={PointsCoursCollectifs.points}
    />
  );
};

export default CoursCollectifs;
