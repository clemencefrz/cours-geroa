import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/design-system/navigation-menu";
import ListItem from "./ListItem";
import Link from "next/link";
import { ButtonProps } from "@/app/_components/design-system/button";

type TypeListItemContent = {
  href: string;
  title: string;
  description?: string;
};

type NavMenuItemPropsWithContent = {
  textTrigger: string;
  onTriggerClick?: ButtonProps["onClick"];
  navContentItems: TypeListItemContent[];
};

type NavMenuItemSimple = {
  textTrigger: string;
  href: string;
};

export type NavMenuItemProps = NavMenuItemSimple | NavMenuItemPropsWithContent;

// Type guard to check if props is NavMenuItemSimple
const isNavMenuItemPropsWithContent = (
  props: NavMenuItemProps
): props is NavMenuItemPropsWithContent => {
  return "navContentItems" in props;
};

const NavMenuItem = (props: NavMenuItemProps) => {
  if (!isNavMenuItemPropsWithContent(props)) {
    return (
      <NavigationMenuItem>
        <Link href={props.href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {props.textTrigger}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger onClick={props.onTriggerClick}>
        {props.textTrigger}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col gap-3 p-3 md:w-[500px]">
          {props.navContentItems.map(({ description, ...itemProps }, key) => (
            <ListItem key={key} {...itemProps}>
              {description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
