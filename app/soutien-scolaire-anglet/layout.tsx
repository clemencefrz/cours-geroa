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
    canonical: "https://cours-geroa.fr/soutien-scolaire-anglet",
  },
  openGraph: {
    title:
      "Soutien Scolaire à Anglet - Cours Particuliers Mathématiques, Physique, Informatique | Cours Geroa",
    description:
      "Profitez du soutien scolaire de qualité à Anglet avec Cours Geroa. Cours particuliers en Mathématiques, Physique-Chimie et Informatique pour lycéens et étudiants. Inscrivez-vous dès aujourd'hui !",
    url: "https://cours-geroa.fr/soutien-scolaire-anglet",
    type: "website",
    images: [
      {
        url: "/images/etudiante-devant-ordi.jpg", //ça marche pas !
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
          id="local-business-soutien-scolaire-anglet"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="local-business-soutien-scolaire-anglet"
        />
        <script
          id="faq-soutien-scolaire-anglet"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
          key="faq-soutien-scolaire-anglet"
        />
      </section>
      {children}
    </>
  );
};

export default Layout;
const faqSchemaJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que le soutien scolaire à Anglet chez Cours Geroa ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le soutien scolaire à Anglet chez Cours Geroa offre des cours particuliers en Mathématiques, Physique-Chimie et Informatique pour les lycéens et étudiants. Les professeurs sont des ingénieurs expérimentés, prêts à aider les élèves à réussir.",
      },
    },
    {
      "@type": "Question",
      name: "Quels niveaux sont couverts par les cours de soutien scolaire à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les cours de soutien scolaire à Anglet couvrent principalement les élèves du lycée et les étudiants. Un accompagnement est proposé pour tous les niveaux, du débutant à l'avancé.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les tarifs des cours particuliers de soutien scolaire à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les tarifs des cours particuliers varient en fonction du niveau de l'élève et du type de cours (individuel ou collectif). Contactez-nous pour un devis personnalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de matières sont proposés pour le soutien scolaire à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cours Geroa propose des cours en Mathématiques, Physique-Chimie et Informatique, avec des enseignants spécialisés dans chaque matière.",
      },
    },
    {
      "@type": "Question",
      name: "Les cours de soutien scolaire à Anglet sont-ils adaptés aux élèves en difficulté ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les cours sont personnalisés et conçus pour répondre aux besoins spécifiques des élèves en difficulté, avec une pédagogie adaptée.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroulent les cours particuliers de soutien scolaire à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les cours particuliers se déroulent à domicile ou en ligne, avec un suivi personnalisé et un plan d'apprentissage adapté aux besoins de chaque élève.",
      },
    },
    {
      "@type": "Question",
      name: "Les cours de soutien scolaire à Anglet sont-ils disponibles en ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les cours de soutien scolaire à Anglet peuvent être suivis en ligne, via une plateforme dédiée qui permet un suivi en temps réel.",
      },
    },
    {
      "@type": "Question",
      name: "Qui sont les professeurs de soutien scolaire chez Cours Geroa à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les professeurs chez Cours Geroa sont des ingénieurs et enseignants expérimentés, passionnés par l'enseignement et spécialisés dans leur domaine.",
      },
    },
    {
      "@type": "Question",
      name: "Comment puis-je réserver un cours de soutien scolaire à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour réserver un cours, vous pouvez nous contacter directement via notre site web ou par téléphone pour fixer un rendez-vous.",
      },
    },
    {
      "@type": "Question",
      name: "Cours Geroa propose-t-il du soutien scolaire en groupe à Anglet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Cours Geroa propose des cours en petits groupes pour permettre aux élèves d'apprendre dans un environnement collaboratif tout en bénéficiant d'un suivi individualisé.",
      },
    },
  ],
};
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
    url: "https://cours-geroa.fr/soutien-scolaire-anglet",
    priceCurrency: "EUR",
    price: "30",
    eligibleRegion: {
      "@type": "Place",
      name: "Anglet",
    },
    validFrom: "2024-01-01",
  },
};
