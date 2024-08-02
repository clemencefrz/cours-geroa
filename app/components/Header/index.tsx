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
          <Button
            className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200"
            asChild
          >
            <div className="absolute -bottom-2 -right-2 bg-brand-one h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <Link className="relative" href="/contact">
              Contactez-nous
            </Link>
          </Button>
          <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-brand-one h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative"> Contactez-nous</span>
          </button>
          <Button variant="outline">Se connecter</Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
