import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Image
        src="/assets/Learning-pana.svg"
        alt="People illustrations by Storyset"
        width={250}
        height={250}
      />

      <div className="flex flex-col gap-7">
        <h2>Progresse avec nous !</h2>
        <p className="text-slate-400 text-sm text-justify">
          {`Que tu souhaites progresser ou te perfectionner, nous sommes là pour t'aider à renforcer ta confiance en toi. Pour nous, chacun a le potentiel d'atteindre ses objectifs. Nous encourageons ton autonomie, toujours dans une ambiance conviviale et positive.`}
        </p>
        <Button asChild className="self-center mt-auto">
          <Link href="/about">Apprendre à nous connaître</Link>
        </Button>
      </div>
    </>
  );
};

export default AboutUs;
