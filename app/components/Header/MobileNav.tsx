import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../Logo";
import Socials from "../Socials";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>Icon</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-2xl"}
              underlineStyles={""}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
