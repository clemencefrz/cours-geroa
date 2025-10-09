import { Button } from "@/components/design-system/button";
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
        <h2>
          {`Geroa, c'est l'endroit idéal pour apprendre, réussir et s'épanouir pleinement.`}
        </h2>
        <h3>{`Une méthode qui s'ajuste à ton profil et tes objectifs.`}</h3>
        <p>
          {`Que tu souhaites progresser ou te perfectionner, nous sommes là pour t'aider à renforcer ta confiance en toi. Pour nous, chaque élève a le potentiel d'atteindre ses objectifs. Nous valorisons ton autonomie, tout en te guidant dans un environnement convivial et positif.`}
        </p>
        <h3>{`La pédagogie au cœur de notre approche.`}</h3>
        <p>{`Chez Geroa, on ne se contente pas de réviser ou d'apprendre par coeur. On t'apprend à apprendre, en te donnant des méthodes efficaces et personnalisées. Nos cours sont conçus pour te rendre acteur de ton apprentissage, afin que tu puisses te dépasser.`}</p>
        <h3>{`Parce qu'il n'y a pas que les maths dans la vie.`}</h3>
        <p>{`Maîtriser les concepts scientifiques est essentiel, mais savoir les communiquer l'est tout autant. Nous t'accompagnons dans le développement de tes qualités personnelles : comment bien te préparer pour le grand oral, rédiger avec clarté, savoir te poser les bonnes questions face à un problème, et développer un esprit critique.`}</p>
        <h3>{`Renforce ta confiance en toi.`}</h3>
        <p>{`Nous t'aidons à dépasser tes croyances limitantes, à sortir de ta zone de confort et à te responsabiliser pour atteindre tes objectifs. Ici, tu développes la confiance en toi nécessaire pour réussir.`}</p>
        <h3>{`Éveille ta curiosité, développe ton esprit critique et découvre le Pays Basque.`}</h3>
        <p>{`Nous avons pour objectif de publier des articles, d'organiser des ateliers et des conférences sur des sujets d'actualité, locaux et globaux, pour stimuler ta curiosité et ton esprit critique.`}</p>

        <Button asChild className="self-center mt-auto">
          <Link href="/about">Apprendre à nous connaître</Link>
        </Button>
      </div>
    </>
  );
};

export default AboutUs;
