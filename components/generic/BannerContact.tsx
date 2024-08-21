import Link from "next/link";
import { Button } from "../ui/button";

const BannerContact = () => {
  return (
    <div className="md:min-h-96 p-9 text-center bg-brandThree rounded-lg my-60 flex flex-col items-center justify-center gap-9">
      <p className="text-4xl font-extrabold">{`Prêt à surpasser tes objectifs scolaires et à construire ton avenir ?`}</p>
      <p className="text-2xl font-bold mt-2">{`Des questions ? Envie de prendre un rendez-vous pour un premier cours ?`}</p>
      <Button asChild>
        <Link href="/contact">Contacte-nous dès maintenant</Link>
      </Button>
    </div>
  );
};

export default BannerContact;
