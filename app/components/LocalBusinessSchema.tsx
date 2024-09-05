// components/LocalBusinessSchema.js
import Head from "next/head";

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
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

const LocalBusinessSchema = () => {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
};

export default LocalBusinessSchema;
