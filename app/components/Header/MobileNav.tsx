import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../Logo";
import Socials from "../Socials";
import { Nav } from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>trigger sheet</div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <Logo />
          <Nav />
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
