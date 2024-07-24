"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from "./NavMenuItem";

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavMenuItem
          textTrigger="Getting started"
          navContentItems={[
            {
              href: "/docs",
              title: "Introduction",
              description:
                "Re-usable components built using Radix UI and Tailwind CSS.",
            },
          ]}
        />
        <NavMenuItem textTrigger="Getting started" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
