import { Metadata } from "next";
import About from "../_components/specific/contact/About";
export const metadata: Metadata = {
  title: "Cours Geroa - À propos",
  description:
    "Découvrez les tuteurs des Cours Geroa, l'école de soutien scolaire à Anglet",
};
const Page = () => {
  return <About />;
};
export default Page;
