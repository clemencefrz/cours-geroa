import Link from "next/link";
import { ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const classes =
    "text-sm text-gray-500 no-underline betterbetterhover:hover:betterhover:hover:text-gray-700 betterbetterhover:hover:dark:betterhover:hover:text-white  transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default FooterLink;
