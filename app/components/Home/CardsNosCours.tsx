import {
  HoverEffect,
  HoverEffectProps,
} from "@/components/ui/card-hover-effect";
import { useMemo } from "react";

export function CardsNosCours() {
  const items: HoverEffectProps["items"] = useMemo(() => {
    return [
      ...services.map((item) => ({
        ...item,
        link: window.location.href + item.pathname,
      })),
    ];
  }, []);

  return <HoverEffect items={items} />;
}
const services = [
  {
    title: "Les cours collectifs",
    description:
      "Les cours collectifs Geroa sont conçus pour les lycéens et les étudiants qui souhaitent progresser ensemble. En petit groupe de 3 à 4 élèves, chaque participant bénéficie d'une attention personnalisée tout en profitant de l'émulation collective.",
    pathname: "/nos-cours#cours-collectifs",
  },
  {
    title: "Les cours particuliers",
    description:
      "Les cours particuliers Geroa offrent une approche 100% personnalisée. Que ce soit pour combler des lacunes spécifiques, approfondir des concepts complexes, ou se préparer à des examens, nos cours particuliers s'adaptent aux besoins uniques de chaque élève.",
    pathname: "/nos-cours#cours-particuliers",
  },
  {
    title: "Les stages",
    description: "Stages",
    pathname: "/nos-cours#stages",
  },
];
