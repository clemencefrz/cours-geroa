import { Button } from "@/src/app/components/design-system/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/app/components/design-system/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import menuData from "@/data/navlinks/nav-links.json";

const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="md:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 p-4">
          {menuData.menuItems.map((item, index) => (
            <div key={index}>
              {item.url ? (
                <a
                  href={item.url}
                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button asChild>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
