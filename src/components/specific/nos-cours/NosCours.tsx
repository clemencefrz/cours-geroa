import {
  Calendar,
  Clock,
  FilePenLine,
  MapPin,
  User,
  Users,
} from "lucide-react";
import Block from "./Block";
import CoursParticuliers from "./CoursParticuliers";

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

      <CoursParticuliers />

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
            description: "Révisions en groupe de 5 élèves maximum",
          },
        ]}
      />
    </div>
  );
};
export default NosCours;
