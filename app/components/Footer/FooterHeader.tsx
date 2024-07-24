import { PropsWithChildren } from "react";

function FooterHeader({ children }: PropsWithChildren) {
  return <h3 className="text-sm text-gray-900 dark:text-white">{children}</h3>;
}

export default FooterHeader;
