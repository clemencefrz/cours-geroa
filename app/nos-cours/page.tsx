import { Metadata } from "next";
import NosCours from "../components/specific/nos-cours/NosCours";
export const metadata: Metadata = {
  title:
    "Nos cours particuliers et services de soutien scolaire à Anglet, Biarritz et Bayonne",
  description:
    "Catalogue des cours Geroa : cours particuliers, cours collectifs et soutien scolaire de mathématiques, physique-chimie et informatique à Anglet, Biarritz et Bayonne.",
};

const Page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cours Geroa",
    image: "https://cours-geroa.fr/logo.jpg",
    "@id": "https://cours-geroa.fr/",
    url: "https://cours-geroa.fr/",
    telephone: "+33 6 65 45 22 24",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenue de Bayonne",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };
  return (
    <>
      <section>
        <script
          id="local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="local-business"
        />
      </section>
      <NosCours />
    </>
  );
};
export default Page;
