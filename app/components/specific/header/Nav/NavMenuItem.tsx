import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/design-system/navigation-menu";
import ListItem from "./ListItem";
import Link from "next/link";

type NavMenuItemProps = {
  url: string;
  label: string;
  subItems?: { url: string; label: string }[];
};

const NavMenuItem = (props: NavMenuItemProps) => {
  if (!props.subItems?.length) {
    return (
      <NavigationMenuItem>
        <Link href={props.url} passHref>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            {props.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{props.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col gap-3 p-3 md:w-[500px]">
          {props.subItems.map(({ label, url }, key) => (
            <ListItem key={key} href={url}>
              {label}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
