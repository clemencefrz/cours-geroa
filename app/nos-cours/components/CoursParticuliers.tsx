import Block from "./Block";
import { PointsCoursParticuliers } from "./NosCours";

const CoursParticuliers = () => {
  return (
    <Block
      title={"Nos cours particuliers"}
      id={"cours-particuliers"}
      content={
        <div className="flex flex-col gap-8">
          <p>
            {`Besoin d'une aide encore plus personnalisée et d'un entraînement intensif ? Les cours particuliers sont là pour ça. Que ce soit pour combler des lacunes, renforcer tes connaissances ou préparer un examen important, on t'offre un accompagnement sur mesure pour atteindre tes objectifs.`}
          </p>

          <div>
            <h3 className="font-semibold text-xl">
              {`Entraînement et renforcement sur les notions clés`}
            </h3>
            <p>
              {`Nous ciblons ensemble les notions essentielles pour te garantir une compréhension solide et durable. Grâce à des exercices pratiques et des explications détaillées, tu gagneras en confiance et en compétence.`}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              {`Préparation spécifique au grand oral ou à d'autres examens`}
            </h3>
            <p>
              {`Prépare-toi efficacement pour tes examens avec des sessions intensives axées sur la méthodologie, la gestion du stress, et la maîtrise du sujet. Je t'aide à développer une argumentation claire et convaincante.`}
            </p>
          </div>
        </div>
      }
      infos={PointsCoursParticuliers.points}
    />
  );
};

export default CoursParticuliers;
