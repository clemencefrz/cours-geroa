import { Metadata } from "next";
import Home from "./components/Home";
export const metadata: Metadata = {
  title: "Cours Geroa - Soutien scolaire - Réussite en Maths, Physique et Info",
  description:
    "Découvrez notre soutien scolaire sur mesure pour lycéens et étudiants. Améliorez vos notes, gagnez en confiance et préparez votre avenir avec des cours en maths, physique et informatique adaptés à vos besoins.",
};

export default function Page() {
  return <Home />;
}
