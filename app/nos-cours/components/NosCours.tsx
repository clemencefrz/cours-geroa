import {
  Calendar,
  Clock,
  DollarSign,
  FilePenLine,
  MapPin,
  User,
  Users,
} from "lucide-react";
import Block from "./Block";

export const PointsCoursCollectifs = {
  points: [
    { icon: MapPin, description: "À Anglet" },
    {
      icon: Calendar,
      description: "Le mercredi soir ou le samedi matin",
    },
    { icon: Users, description: "En petit groupe de 4 élèves maximum" },
    { icon: DollarSign, description: "Tarifs avantageux" },
  ],
  href: "/nos-cours#cours-collectifs",
};

export const PointsCoursParticuliers = {
  points: [
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
      icon: FilePenLine,
      description: `Bilan régulier tout au long de l'année`,
    },
  ],
  href: "nos-cours#cours-particuliers",
};

const NosCours = () => {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <div className="ContainerHeaderPage">
        <h1>Nos cours</h1>
        <h2 className="H2SubtitlePage">
          {`Chez Geroa, on fait aimer les maths, la physique-chimie et
        l'informatique à tous les lycéens et étudiants, peu importe leur niveau
        !`}
        </h2>
      </div>

      <Block
        title={"Nos cours collectifs"}
        id={"cours-collectifs"}
        content={
          <div className="flex flex-col gap-8">
            <p>
              {`Les cours collectifs Geroa s'adressent aux lycéens et aux étudiants. Chaque semaine, les élèves travaillent en petit groupe (3-4), progressent à leur rythme, tout ça dans une bonne ambiance !`}
            </p>

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
        }
        infos={PointsCoursCollectifs.points}
      />

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

      <Block
        title={"Nos stages"}
        id={"stages"}
        content={
          <>
            <p>
              {`Améliore considérablement tes résultats avec nos stages intensifs, spécialement conçus pour les lycéens et étudiants en maths, physique et informatique.`}
            </p>
            <p>
              {`Dans des groupes réduits (max 8 élèves), bénéficie d'un
          accompagnement sur-mesure pour réviser les notions clés au bon
          moment. Nos programmes sont adaptés aux nouveaux cursus et visent à
          renforcer ta compréhension tout en développant ta confiance.
          En mettant au centre de nos cours la pédagogie et la bienveillance, on te garantit un apprentissage aussi
          efficace qu'agréable.`}
              {`Rejoins-nous pour des vacances productives !`}
            </p>
          </>
        }
        infos={[
          { icon: MapPin, description: "À Anglet" },
          {
            icon: Clock,
            description: "3 demi-journées sur 3 jours",
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
