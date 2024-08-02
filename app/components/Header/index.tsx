"use client";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";

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
          <div className="px-4 py-2 rounded-md border bg-primary border-black text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer">
            <Link href="/contact">Contactez-nous</Link>
          </div>
          <Button variant="outline">Se connecter</Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
