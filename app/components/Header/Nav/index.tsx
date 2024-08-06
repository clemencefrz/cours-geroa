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
      { textTrigger: "Accueil", href: "" },
      {
        textTrigger: "Nos cours",
        onTriggerClick: () => {
          console.log("coucou");
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
            description: "blabllalba",
          },
          {
            href: "/docs",
            title: "Blog",
            description: "blabllalba",
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
