"use client";
import Image from "next/image";
import { Button } from "@/src/app/components/design-system/button";
import { Nav } from "./Nav";
import Link from "next/link";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 h-[108px]">
        <NavMobile />
        <div className="flex flex-row items-center">
          <Link href={"/"} className=" hidden md:block mr-6 mb-4">
            <Image
              src={"/images/LogoGeroa.svg"}
              alt={"logo Cours Geroa"}
              width={120}
              height={80}
            />
          </Link>
          {/* nav */}
          <Nav />
        </div>
        {/* Boutons d'actions */}
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">Se connecter</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
