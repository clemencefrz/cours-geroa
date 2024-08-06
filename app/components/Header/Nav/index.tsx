"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem, { NavMenuItemProps } from "./NavMenuItem";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export function Nav() {
  const router = useRouter();
  const composants: NavMenuItemProps[] = useMemo(
    () => [
      { textTrigger: "Accueil", href: "/" },
      {
        textTrigger: "Nos cours",
        onTriggerClick: () => {
          router.push("/nos-cours");
        },
        navContentItems: [
          {
            href: "/nos-cours#cours-collectifs",
            title: "Les cours collectifs",
          },
          {
            href: "/nos-cours#cours-particuliers",
            title: "Les cours particuliers",
          },
          {
            href: "/nos-cours#stages",
            title: "Les stages",
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
            description: "Des sujets d'examens et de TD",
          },
          {
            href: "/docs",
            title: "Blog",
            description:
              "Des articles pour aider les étudiants à progresser et à s'épanouir",
          },
        ],
      },
    ],
    [router]
  );
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
