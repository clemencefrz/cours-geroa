"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem, { NavMenuItemProps } from "./NavMenuItem";

const composants: NavMenuItemProps[] = [
  { textTrigger: "Accueil", href: "" },
  {
    textTrigger: "Getting started",
    navContentItems: [
      {
        href: "/docs",
        title: "Introduction",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
    ],
  },
  {
    textTrigger: "Getting started",
    href: "",
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
