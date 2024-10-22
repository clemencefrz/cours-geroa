import { Button } from "@/app/_components/design-system/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/design-system/sheet";
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

              {item.subItems && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.url}
                      className="block text-sm text-gray-700 hover:underline"
                    >
                      <span className="font-semibold">{subItem.label}</span>
                    </a>
                  ))}
                </div>
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
