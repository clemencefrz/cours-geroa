import Link from "next/link";
import { HTMLAttributes } from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/contact", name: "contact" },
  { path: "/blog", name: "Blog" },
];

type Props = {
  containerStyles: HTMLAttributes<Navigator>["className"];
  linkStyles: string;
  underlineStyles: string;
};
const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
  //   const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
