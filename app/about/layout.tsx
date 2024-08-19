import BannerContact from "@/components/generic/BannerContact";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <BannerContact />
    </>
  );
};

export default Layout;
