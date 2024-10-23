"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/app/_components/design-system/navigation-menu";
import NavMenuItem from "./NavMenuItem";
import menuData from "@/data/navlinks/nav-links.json";

export function Nav() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {menuData.menuItems.map((props, key) => (
          <NavMenuItem {...props} key={key} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
