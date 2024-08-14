import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
        href: "/docs",
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
      {/* Trigger button for mobile menu */}
      <SheetTrigger asChild>
        <Button variant="link" aria-label="Open menu" className="md:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="md:hidden"
        aria-labelledby="sheet-title"
      >
        <SheetHeader>
          <SheetTitle id="sheet-title">Menu</SheetTitle>
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
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
