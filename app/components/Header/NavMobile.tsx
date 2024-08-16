import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
const navigationItems = [
  { textTrigger: "Accueil", href: "/" },
  {
    textTrigger: "Nos cours",
    href: "/nos-cours",
    navContentItems: [
      { href: "/nos-cours#cours-collectifs", title: "Les cours collectifs" },
      {
        href: "/nos-cours#cours-particuliers",
        title: "Les cours particuliers",
      },
      { href: "/nos-cours#stages", title: "Les stages" },
    ],
  },
  { textTrigger: "Qui sommes-nous ?", href: "/about" },
  {
    textTrigger: "Apprendre",
    navContentItems: [
      {
        href: "/docs",
        title: "Nos exercices",
        description: "Des sujets d'examens et de TD",
      },
      {
        href: "/blog",
        title: "Blog",
        description:
          "Des articles pour aider les étudiants à progresser et à s'épanouir",
      },
    ],
  },
];

const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="md:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 p-4">
          {navigationItems.map((item, index) => (
            <div key={index}>
              {/* Main navigation item */}
              {item.href ? (
                <a
                  href={item.href}
                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.textTrigger}
                </a>
              ) : (
                <button
                  type="button"
                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.textTrigger}
                </button>
              )}
              {/* Sub-menu items */}
              {item.navContentItems && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.navContentItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block text-sm text-gray-700 hover:underline"
                    >
                      <span className="font-semibold">{subItem.title}</span>
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
