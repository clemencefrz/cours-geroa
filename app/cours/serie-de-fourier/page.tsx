// pages/index.js
import Image from "next/image";
import ExerciseAccordion from "../components/exercice-accordion";
import { EXERCISES } from "@/constants/exercises/serie-de-fourier";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1>{`Série de Fourier`}</h1>
      <div className="">
        <Image
          src={"/images/fiches/serie-de-fourier.png"}
          className="object-cover"
          height={1000}
          width={800}
          alt={`Fiche TD 1 - Analyse de Fourier`}
        />
      </div>
      <h2>{`Prérequis : Bien maîtriser le calcul des intégrales de fonctions trigonométriques.`}</h2>
      <div className="flex flex-col gap-4 w-full">
        {EXERCISES.map((ex) => (
          <ExerciseAccordion
            key={ex.id}
            exercise={{ enonce: ex.exercise, title: ex.title }}
            solution={ex.solution}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
