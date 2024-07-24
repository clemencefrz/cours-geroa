"use client";

import Logo from "../Logo";

import MobileNav from "./MobileNav";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center">
          <Logo />
          {/* nav */}
          <Nav />
          {/* mobile nav */}
          <div className="sm:hidden ">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
