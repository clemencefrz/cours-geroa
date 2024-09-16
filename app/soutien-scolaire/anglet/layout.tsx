import { Metadata } from "next";
import { PropsWithChildren } from "react";
export const metadata: Metadata = {
  title:
    "Soutien Scolaire à Anglet - Cours Particuliers Mathématiques, Physique, Informatique | Cours Geroa",
  description:
    "Cours Geroa à Anglet : soutien scolaire personnalisé en Mathématiques, Physique-Chimie et Informatique pour lycéens et étudiants. Professeurs expérimentés. Résultats garantis.",
  keywords: [
    "soutien scolaire anglet",
    "cours particuliers anglet",
    "cours mathématiques anglet",
    "physique-chimie anglet",
    "cours informatique anglet",
    "professeur particulier anglet",
    "aide scolaire anglet",
    "tutorat anglet",
    "éducation personnalisée anglet",
    "cours à domicile anglet",
    "soutien scolaire lycée anglet",
  ],
  alternates: {
    canonical: "https://cours-geroa.fr/soutien-scolaire/anglet",
  },
  openGraph: {
    title:
      "Soutien Scolaire à Anglet - Cours Particuliers Mathématiques, Physique, Informatique | Cours Geroa",
    description:
      "Profitez du soutien scolaire de qualité à Anglet avec Cours Geroa. Cours particuliers en Mathématiques, Physique-Chimie et Informatique pour lycéens et étudiants. Inscrivez-vous dès aujourd'hui !",
    url: "https://cours-geroa.fr/soutien-scolaire/anglet",
    type: "website",
    images: [
      {
        url: "/images/etudiante-devant-ordi.jpg",
        width: 1200,
        height: 630,
        alt: "Soutien Scolaire à Anglet - Cours Geroa",
      },
    ],
    locale: "fr_FR",
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section>
        <script
          id="local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="local-business-soutien-scolaire-anglet"
        />
      </section>
      {children}
    </>
  );
};

export default Layout;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Cours Geroa",
  description:
    "Cours Geroa propose des cours particuliers et collectifs de soutien scolaire en mathématiques, physique-chimie et informatique à Anglet pour les élèves de lycée et d'études supérieures.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue de Bayonne",
    addressLocality: "Anglet",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "64600",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Service client",
    telephone: "+33-665452214",
    email: "cours.geroa@gmail.com",
  },
  url: "https://cours-geroa.fr",
  founder: {
    "@type": "Person",
    name: "Clémence Fernandez",
    jobTitle: "Fondatrice",
    url: "https://cours-geroa.fr/about",
  },
  offers: {
    "@type": "Offer",
    url: "https://cours-geroa.fr/soutien-scolaire/anglet",
    priceCurrency: "EUR",
    price: "30",
    eligibleRegion: {
      "@type": "Place",
      name: "Anglet",
    },
    validFrom: "2024-01-01",
  },
};
