"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem, { NavMenuItemProps } from "./NavMenuItem";

const composants: NavMenuItemProps[] = [
  { textTrigger: "Accueil", href: "" },
  {
    textTrigger: "Nos cours",
    navContentItems: [
      {
        href: "/nos-cours",
        title: "Les cours collectifs",
        description: "blabllalba",
      },
      {
        href: "/docs",
        title: "Les cours particuliers",
        description: "blabllalba",
      },
      {
        href: "/docs",
        title: "Les stages",
        description: "blabllalba",
      },
    ],
  },
  {
    textTrigger: "Qui sommes-nous ?",
    href: "/about",
  },
  {
    textTrigger: "Apprendre",
    navContentItems: [
      {
        href: "/docs",
        title: "Nos exercices",
        description: "blabllalba",
      },
      {
        href: "/docs",
        title: "Blog",
        description: "blabllalba",
      },
    ],
  },
];

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {composants.map((props, key) => (
          <NavMenuItem {...props} key={key} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
