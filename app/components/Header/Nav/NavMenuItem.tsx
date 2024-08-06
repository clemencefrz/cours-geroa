import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import Link from "next/link";

type TypeListItemContent = {
  href: string;
  title: string;
  description: string;
};

type NavMenuItemPropsWithContent = {
  textTrigger: string;
  navContentItems: TypeListItemContent[];
};

type NavMenuItemSimple = {
  textTrigger: string;
  href: string;
};

export type NavMenuItemProps = NavMenuItemSimple | NavMenuItemPropsWithContent;

// Type guard to check if props is NavMenuItemSimple
const isNavMenuItemSimple = (
  props: NavMenuItemProps
): props is NavMenuItemSimple => {
  return "href" in props;
};

const NavMenuItem = (props: NavMenuItemProps) => {
  if (isNavMenuItemSimple(props)) {
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
      <NavigationMenuTrigger>{props.textTrigger}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col gap-3 p-6 md:w-[500px]">
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
