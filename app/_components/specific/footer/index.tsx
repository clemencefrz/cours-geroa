import Logo from "../../generic/Logo";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";
import { MapPin, Phone, Clock } from "lucide-react";

const navigation = {
  general: [
    { name: "Accueil", href: "/" },
    { name: "Nos services", href: "/nos-cours" },
    { name: "Blog", href: "/blog" },
    { name: "À propos", href: "/about" },
    { name: "Ressources", href: "/login" },
    { name: "Se connecter", href: "/login" },
  ],

  contactInfo: [
    {
      name: "Anglet",
      href: "/contact",
      icon: <MapPin className="h-4 w-4 text-gray-500" />,
    },
    {
      name: "06 65 45 22 14",
      href: "/contact",
      icon: <Phone className="h-4 w-4 text-gray-500" />,
    },
    {
      name: "Lun. à Sam 12-14h",
      href: "/contact",
      icon: <Clock className="h-4 w-4 text-gray-500" />,
    },
  ],
  legal: [
    { name: "Mention légale", href: "/privacy" },
    { name: "Réglement intérieur", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="p-9 w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <FooterHeader>Cours Geroa</FooterHeader>
                <div className="mt-4 space-y-1.5 list-none ml-0 text-xs text-justify">
                  <p>{`Nous sommes passionnés par ce que nous faisons et espérons que cela transparaît à travers votre visite sur notre site. Nous serions ravis de vous accueillir en personne et de discuter avec vous de vos besoins.`}</p>
                </div>
              </div>
              <div>
                <FooterHeader>Tu cherches quelque chose ?</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeader>Comment nous joindre ?</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.contactInfo.map((item) => (
                    <li
                      key={item.name}
                      className={"flex flex-row items-center gap-2"}
                    >
                      {item.icon}
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeader>Légal</FooterHeader>
                <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-xs text-gray-500 ">
              &copy; {new Date().getFullYear()} Cours Geroa, Inc. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
