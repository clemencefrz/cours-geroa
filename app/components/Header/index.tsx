"use client";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";

import MobileNav from "./MobileNav";
import { Nav } from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 h-[108px]">
        <div className="flex flex-row items-center">
          <Logo />
          {/* nav */}
          <Nav />
        </div>
        {/* Boutons d'actions */}
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
          <Button variant="outline">Se connecter</Button>
        </div>

        {/* mobile nav */}
        <div className="sm:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
