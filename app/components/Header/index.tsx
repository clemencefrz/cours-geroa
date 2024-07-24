"use client";

import Logo from "../Logo";

import MobileNav from "./MobileNav";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex">
          <Logo />
          {/* nav */}
          <Nav />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
