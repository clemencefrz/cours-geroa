import BannerContact from "@/app/components/generic/BannerContact";
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
