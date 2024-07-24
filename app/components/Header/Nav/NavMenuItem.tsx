import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import Link from "next/link";

type TypeListItem = {
  href: string;
  title: string;
  description: string;
};

type Props = {
  textTrigger: string;
  navContentItems?: TypeListItem[];
};

const NavMenuItem = ({ textTrigger, navContentItems }: Props) => {
  if (!navContentItems?.length) {
    return (
      <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {textTrigger}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{textTrigger}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          {navContentItems.map(({ description, ...props }, key) => (
            <ListItem key={key} {...props}>
              {description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
export default NavMenuItem;
