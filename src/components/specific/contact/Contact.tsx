import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/design-system/button";

const CONTACTS = [
  {
    name: "Clémence Fernandez",
    email: "cours.geroa@gmail.com",
    photo: "/images/clemence.jpeg",
  },
  {
    name: "Damien Fernandez",
    email: "damien.frdz@gmail.com",
    photo: null,
  },
  {
    name: "Benjamin",
    email: "benjamin.frdz@gmail.com",
    photo: null,
  },
];

const Contact = () => {
  return (
    <div className="container flex flex-col gap-8">
      <h1 className="self-start">Contactez-nous directement.</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {CONTACTS.map(({ name, email, photo }) => (
          <div key={email} className="flex flex-row gap-2">
            <div className="rounded-full w-40 h-40 overflow-hidden bg-muted flex items-center justify-center">
              {photo ? (
                <Image
                  width={200}
                  height={200}
                  src={photo}
                  alt={`Photo de ${name}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-semibold text-muted-foreground">
                  {name[0]}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <p>{name}</p>
              <Button variant={"link"} asChild>
                <Link className="flex flex-row gap-1" href={`mailto:${email}`}>
                  <Mail size={20} /> {email}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact;
