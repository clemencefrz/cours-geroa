import { Metadata } from "next";
import Home from "./components/Home";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
export const metadata: Metadata = {
  title:
    "Cours particuliers Geroa - Soutien scolaire à Anglet, Biarritz et Bayonne  - Réussite en Maths, Physique et Informatique",
  description:
    "Découvrez notre soutien scolaire sur mesure pour lycéens et étudiants. Améliorez vos notes, gagnez en confiance et préparez votre avenir avec des cours en maths, physique et informatique adaptés à vos besoins.",
};

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <Home />
    </>
  );
}
