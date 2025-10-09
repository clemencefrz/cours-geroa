import {
  Calendar,
  Clock,
  MapPin,
  User,
} from "lucide-react";
import CoursParticuliers from "./CoursParticuliers";

export const PointsCoursParticuliers = {
  points: [
    { icon: MapPin, description: "À Anglet" },
    {
      icon: Calendar,
      description: "Le soir en semaine, le mercredi après-midi et le week-end",
    },
    { icon: Clock, description: "Séances de 1h00 à 2h00" },
    {
      icon: User,
      description: `Suivi personnalisé des progrès de l'élève`,
    }
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
    </div>
  );
};
export default NosCours;
