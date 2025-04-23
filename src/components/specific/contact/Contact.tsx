import { Mail, Phone } from "lucide-react";
import FormContact from "./FormContact";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/design-system/button";

const Contact = () => {
  return (
    <div className="container flex flex-col gap-8">
      {/* Titre */}
      <h1 className="self-start">
        Intéressés par des cours ? Contactez-nous !
      </h1>
      <div className="flex flex-col md:flex-row gap-16 justify-between">
        {/* Formulaire */}
        <FormContact />
        {/* Contact par téléphone */}
        <div className="flex flex-col">
          <h2 className="mb-4">Contactez-nous directement.</h2>
          <div className="flex flex-row gap-2">
            <div className="rounded-full w-40 h-40 overflow-hidden">
              <Image
                width={200}
                height={200}
                src={"/images/clemence.jpeg"}
                alt={`Photo de Clémence`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p>Clémence Fernandez</p>
              <div className="flex flex-col">
                <Button variant={"link"} asChild>
                  <Link
                    className="flex flex-row gap-1"
                    href={"https://wa.me/0665452214"}
                  >
                    <Phone size={20} /> 06.65.45.22.14
                  </Link>
                </Button>
                <Button variant={"link"} asChild>
                  <Link
                    className="flex flex-row gap-1"
                    href={"mailto:cours.geroa@gmail.com"}
                  >
                    <Mail size={20} /> cours.geroa@gmail.com
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
