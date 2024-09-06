import Script from "next/script";

const LocalBusinessSchema = () => {
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
    <Script
      id="local-business"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default LocalBusinessSchema;
